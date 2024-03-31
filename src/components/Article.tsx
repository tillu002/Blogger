import { AppBar } from "./AppBar";
import { Avatar } from "./Avatar";
import { BackButton } from "./BackButton";
import { PublishMessage } from "./Message";

export function Article({ title, content, authorName, date, bio }: BlogTypes) {
  return (
    <div>
      <AppBar />
      <PublishMessage />
      <div
        id="article"
        className="w-full grid grid-cols-10 px-10 items-center mt-6 bg-slate-500 mx-7 l:flex-col l:flex justify-center h-auto my-auto xl:text-center xl:grid xl:grid-cols-6 s:h-screen sm:flex-col sm:flex sm:items-center sm:justify-center sm:px-2 sm:mx-1 sm:overflow-hidden s:grid-cols-2"
      >
        <div className=" col-span-6 p-4">
          <div className="flex justify-between items-center">
            <div className="bg-slate-200 w-[200px] text-center rounded-md l:w-[250px] py-1">
              Published On <span className="font-semibold">{date}</span>
            </div>
            <BackButton />
          </div>
          <div className="text-6xl font-bold pt-3 l:text-2xl s:text-xl">
            {title}
          </div>
          <div className="text-xl font-normal pt-5 l:ml-4 s:text-base s:pt-3">
            {content}
          </div>
        </div>
        <div
          id="author-comp"
          className="col-span-4 p-4 text-center sm:ml-0 flex justify-center ml-auto mr-auto l:col-start-3 l:col-end-5 xl:col-start-2 xl:col-end-6 s:cols-span-1"
        >
          <div>
            <div className="border-b mb-4 xl:text-3xl s:text-base">Author</div>
            <div className="flex items-center gap-2">
              <div>
                <Avatar authorName={authorName} />
              </div>
              <div className="flex flex-col">
                <div
                  id="author-name"
                  className="font-bold text-2xl xl:text-3xl"
                >
                  {authorName}
                </div>
                <div
                  id="author-bio"
                  className="text-gray-700 text-xl xl:text-xl xl:w-[350px] s:w-[100px]"
                >
                  {bio}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BlogTypes {
  title: string;
  content: string;
  date: string;
  authorName: string;
  bio?: string;
}
