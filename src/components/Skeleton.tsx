import { AppBar } from "./AppBar";
import { Dot } from "./BlogCard";

export function Skeleton() {
  return (
    <div>
      <div className="flex flex-col bg-slate-200 w-[700px] h-[200px]  justify-center pl-3 border-b border-slate-400 pt-3 mb-3 pb-3 max-w-2xl gap-3 l:w-[550px] s:w-[300px] s:ml-4 overflow-auto">
        <div className="flex items-center gap-2">
          <div className="animate-pulse bg-gray-500 h-12 w-12 rounded-full"></div>
          <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[100px] s:w-[80px]"></div>
          <Dot />
          <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[80px]"></div>
        </div>
        <div>
          <h1 className="font-bold text-3xl font-[Urbanist] pt-1 animate-pulse rounded-md bg-gray-500 h-7 w-[300px] s:w-[200px]"></h1>
        </div>
        <div>
          <p className="text-xl text-slate-700 pt-3 animate-pulse rounded-md bg-gray-500 h-4 w-[400px] s:w-[230px]"></p>
        </div>
        <div className="pt-3 ">
          <div className="flex text-slate-300 w-[100px] justify-center">
            <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[70px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div>
      <AppBar />
      <div className="w-full grid grid-cols-10 px-10 items-center mt-6 bg-slate-50 mx-7 gap-5">
        <div className=" col-span-6 p-4 gap-3">
          <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[100px]"></div>
          <div className="text-6xl font-bold pt-3 animate-pulse rounded-md bg-gray-500 h-7 w-[600px]"></div>
          <div className="text-xl font-normal pt-5 animate-pulse rounded-md bg-gray-500 h-4 w-[800px]">
            {" "}
          </div>
        </div>
        <div className="col-span-4 p-4">
          <div className="border-b mb-4">Author</div>
          <div className="flex items-center gap-2">
            <div>
              <div className="animate-pulse bg-gray-500 h-12 w-12 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-xl animate-pulse rounded-md bg-gray-500 h-2 w-[100px]"></div>
              <div className="text-gray-700 animate-pulse rounded-md bg-gray-500 h-3 w-[200px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
