import { Article } from "../components/Article";
import { ArticleSkeleton } from "../components/Skeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: String(id) || "",
  });

  if (loading) {
    return (
      <div>
        <ArticleSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Article
        title={blog?.title || ""}
        content={blog?.content || ""}
        authorName={blog?.author.name || ""}
        date={` ${blog?.createdAt || ""}`}
        bio={blog?.author.bio}
        key={blog?.id}
      />
    </div>
  );
};
