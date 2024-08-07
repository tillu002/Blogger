import { useGetblog } from "../hooks";
import { Skeleton } from "../components/Skeleton";
import { BlogCard } from "../components/BlogCard";
import { AppBar } from "../components/AppBar";
import { DeleteBlog } from '../components/DeleteButton';
import { BACKEND_URL } from "../config";
import axios from "axios";
import { EditButton } from "../components/EditButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PopUp } from "../components/PopUp";

export const MyBlogs = () => {
  const { loading, myBlogs } = useGetblog();
  const navigate = useNavigate();
  const [deleteMsg, setDeleteMsg] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedBlogId(id);
    setDeleteMsg(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedBlogId !== null) {
      try {
        const res = await axios.delete(
          `${BACKEND_URL}/api/v1/blog/myBlogs/${selectedBlogId}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (res) {
          location.reload();
        }
      } catch (error) {
        console.error("Error deleting the blog", error);
      }
    }
    setDeleteMsg(false);
  };

  const handleCancelDelete = () => {
    setDeleteMsg(false);
    setSelectedBlogId(null);
  };

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center mt-[20%] flex-col">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex flex-col justify-center items-center mt-4 overflow-x-hidden">
        <BlogsButton />
        <div
          id="myblogs"
          className="m:w-[600px] w-[800px] overflow-auto p-10  section flex flex-col justify-center items-center"
        >
          {myBlogs != null ? (
            myBlogs.map((blog) => (
              <div key={blog.id}>
                <article className="relative">
                  <BlogCard
                    title={blog.title}
                    content={blog.content}
                    authorName={blog.author.name}
                    date={blog.createdAt}
                    key={blog.id}
                    route={String(blog.id)}
                    Likes={blog.Likes}
                    id={String(blog.id)}
                  />
                  <article className="absolute top-2 right-2">
                    <EditButton
                      onClick={() => {
                        navigate(`/blog/edit/${blog.id}`);
                      }}
                    />
                  </article>
                  <article className="absolute bottom-4 right-2">
                    <DeleteBlog
                      onClick={() => handleDeleteClick(blog.id)}
                    />
                  </article>
                </article>
              </div>
            ))
          ) : (
            <div className="w-full flex justify-center items-center ">
              <Skeleton />
              <div className="w-[800px] max-h-[600px] overflow-auto p-10 bg-slate-300 section">
                You Have No Blogs Published
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-center mb-2 text-lg font-medium">You have reached the end...😀</p>
      <div className="w-full h-full flex justify-center items-center">
        {deleteMsg && (
          <PopUp
            onDelete={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
      </div>
    </div>
  );
};

function BlogsButton() {
  return (
    <div>
      <button
        onClick={() => {
          location.reload()
        }}
        className="bg-gray-900 hover:bg-gray-600 text-white font-bold py-2 px-8 rounded-full animate-pulse mb-5 text-lg z-0"
      >
        Your Blogs
      </button>
    </div>
  );
}
