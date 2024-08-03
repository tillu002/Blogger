import { Link } from "react-router-dom";
import { useBlogs } from "../hooks";
import { Avatar } from "./Avatar";
import { Skeleton } from "./Skeleton";

export function BlogCard({
  title,
  content,
  date,
  authorName,
  route,
}: BlogTypes) {
  const { loading } = useBlogs();

  if (loading) {
    return <Skeleton />;
  }

  return (
    <Link to={`/blog/${route}`}>
      <div
        id="blogcard"
        className="flex flex-col bg-slate-200 w-[700px] overflow-hidden h-auto justify-center pl-3 border-b border-slate-400 pt-3 mb-3 pb-3 cursor-pointer md:w-[450px] l:w-[620px] sm:w-[300px] sm:ml-40 s:ml-4 sm:h-auto relative"
      >
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
            className="font-bold text-3xl font-[Urbanist] pt-1 l:text-2xl md:text-2xl sm:text-xl s:text-base"
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
        <div className="pt-3 ">
          <div className="flex text-slate-300 bg-black w-[100px] justify-center s:w-[90px] sm:w-[80px] s:overflow-auto s:text-sm">
            <p>{Math.ceil(content.length / 60)} min read</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface BlogTypes {
  title: string;
  content: string;
  date: string;
  route?: string;
  authorName: string;
}

export function Dot() {
  return <div className="rounded-full bg-slate-400 w-1 h-1 sm:invisible"></div>;
}
