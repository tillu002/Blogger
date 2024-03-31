import { useGetblog } from "../hooks";
import { Skeleton } from "../components/Skeleton";
import { BlogCard } from "../components/BlogCard";

import { AppBar } from "../components/AppBar";
import { DeleteBlog } from "../components/DeleteButton";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { EditButton } from "../components/EditButton";
import { useNavigate } from "react-router-dom";

export const MyBlogs = () => {
  // const { uid = useRecoilValue(userIdAtom) } = useParams();
  const { loading, myBlogs } = useGetblog();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center">
        <Skeleton />
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex flex-col justify-center items-center mt-11">
        <BlogsButton />

        <div className="m:w-[600px] w-[800px] max-h-[600px] overflow-auto p-10 bg-slate-300 section">
          {myBlogs != null ? (
            myBlogs.map((blog) => (
              <div key={blog.id}>
                <BlogCard
                  title={blog.title}
                  content={blog.content}
                  authorName={blog.author.name}
                  date={blog.createdAt}
                  key={blog.id}
                  route={String(blog.id)}
                />
                <a
                  onClick={() => {
                    window.location.reload;
                  }}
                  key={blog.uid}
                >
                  <DeleteBlog
                    onClick={async () => {
                      const res = await axios.delete(
                        `${BACKEND_URL}/api/v1/blog/myBlogs/${blog.id}`,
                        {
                          headers: {
                            Authorization: localStorage.getItem("token"),
                          },
                        }
                      );

                      if (res) {
                        console.log("Blog deleted successfully");
                      }
                      window.location.href = window.location.href;
                    }}
                  />
                  <EditButton
                    onClick={() => {
                      navigate(`/blog/edit/${blog.id}`);
                    }}
                  />
                </a>
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
    </div>
  );
};

function BlogsButton() {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = window.location.href;
        }}
        className="bg-gray-900 hover:bg-gray-600 text-white font-bold py-2 px-8 rounded-full animate-pulse mb-5 text-lg"
      >
        Your Blogs
      </button>
    </div>
  );
}
