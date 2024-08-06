import {  Link } from "react-router-dom";
import { useBlogs } from "../hooks";
import { Avatar } from "./Avatar";
import { Skeleton } from "./Skeleton";
import { LikeButton } from "./Utils";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function BlogCard({
  title,
  content,
  id,
  date,
  authorName,
  route,
  Likes,
}: BlogTypes) {
  const { loading } = useBlogs();

  if (loading) {
    return <Skeleton />;
  }


  return (
    <article>
      <div
        id="blogcard"
        className="flex flex-col bg-slate-200 w-[700px] overflow-auto h-auto justify-center pl-3 border-b border-slate-400 pt-3 mb-3 pb-3 cursor-pointer md:w-[450px] l:w-[620px] sm:w-[300px] sm:ml-40 s:ml-4 sm:h-auto relative rounded-md"
      >
        <Link to={`/blog/${route}`}>
        <div className="flex overflow-auto items-center gap-2 s:gap-1 s:flex-col">
          <div className="flex items-center gap-2 s:gap-2">
            <Avatar authorName={authorName} />
            {authorName}
          </div>
          <Dot />
          Posted on {date}
        </div>
        <div>
          <h1
            id="blogcardtitle"
            className="font-bold text-3xl font-[Urbanist] pt-1 l:text-2xl md:text-2xl sm:text-2xl"
          >
            {title.length > 50 ? content.slice(0, 70) + "..." : title}
          </h1>
        </div>
        <div>
          <p
            id="blogcard-content"
            className="text-xl text-slate-700 pt-3 s:text-xl"
          >
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </p>
        </div>
        </Link>
        <div className="pt-3 ">
          <div className="flex text-slate-300 bg-black w-[100px] justify-center s:w-[90px] sm:w-[80px] s:overflow-auto s:text-sm">
            <p>{Math.ceil(content.length / 60)} min read</p>
          </div>
          <div className="text-black text-lg flex items-center ">
            <LikeButton onClick={async() => {
              console.log(id);
            const response = await axios.put(`${BACKEND_URL}/api/v1/blog/${id}/like`,
              {},
              {
                headers: { Authorization: localStorage.getItem("token") },

              }
          );
            if(response) {
              console.log("Liked successfully")
            }
      }}/>
            <p>{Likes}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

interface BlogTypes {
  title: string;
  content: string;
  date: string;
  route?: string;
  authorName: string;
  Likes: number;
  id: string;
}

export function Dot() {
  return <div className="rounded-full bg-slate-400 w-1 h-1 sm:invisible"></div>;
}
