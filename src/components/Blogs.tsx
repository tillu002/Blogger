import { useBlogs } from "../hooks";
import { AppBar } from "./AppBar";
import { BlogCard } from "./BlogCard";
import { Skeleton } from "./Skeleton";
import { CubeLoader } from "./Utils";
import React from 'react';

export function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
      <AppBar />
      <div className="w-full h-screen items-center flex justify-center">
        <CubeLoader />
        </div>
        </div>
    );
  }
  return (
    <React.Fragment>
            <AppBar />

      <div className="flex flex-col justify-center items-center l:mt-8 z-20 mr-3">
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            content={blog.content}
            authorName={blog.author.name}
            date={blog.createdAt.split("T")[0]}
            key={blog.id}
            route={String(blog.id)}
            Likes={blog.Likes}
            id={String(blog.id)}
          />
        ))}
              {loading ? <Skeleton />: <article  className="text-lg mb-3 font-semibold">You're upto date✔️</article>}
      </div>
    </React.Fragment>
  );
}
