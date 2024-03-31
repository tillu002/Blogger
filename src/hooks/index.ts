import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: number;
  createdAt: string;
  author: {
    name: string;
    bio?: string;
  };
  uid: string;
}

export function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);

  return { loading, blogs };
}

export function useBlog({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, [id]);

  return { loading, blog };
}

export function useGetblog() {
  const [loading, setLoading] = useState(true);
  const [myBlogs, setGetMyBlogs] = useState<Blog[]>([]);

  const uid2 = localStorage.getItem("uid");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/myBlogs/${uid2}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setGetMyBlogs(response.data.myBlogs);
        setLoading(false);
      });
    // console.log(uid);
  }, [uid2]);

  return { loading, myBlogs };
}
