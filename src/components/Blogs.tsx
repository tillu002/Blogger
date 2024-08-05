import { useBlogs } from "../hooks";
import { AppBar } from "./AppBar";
import { BlogCard } from "./BlogCard";
import { Skeleton } from "./Skeleton";
import { CubeLoader } from "./Utils";

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
    <div>
            <AppBar />

            <div className="text-xl text-center h-4 w-full flex justify-center mb-4 items-center">Pull to refresh <DownArrow /> </div>

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
    </div>
  );
}


function DownArrow() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
</svg>

}