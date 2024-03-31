import { useBlogs } from "../hooks";
import { AppBar } from "./AppBar";
import { BlogCard } from "./BlogCard";
import { Loader } from "./Loader";
import { Skeleton } from "./Skeleton";

export function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div className="flex flex-col justify-center items-center l:mt-8">
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            content={blog.content}
            authorName={blog.author.name}
            date={blog.createdAt.split("T")[0]}
            key={blog.id}
            route={String(blog.id)}
          />
        ))}
        <Skeleton />
      </div>
    </div>
  );
}
