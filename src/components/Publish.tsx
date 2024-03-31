import { useState } from "react";
import { AppBar } from "./AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { publishMessageAtom } from "../atomes";

export const Publish = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    authorId: "dfrgg",
    published: true,
  });

  const setPublishmsg = useSetRecoilState(publishMessageAtom);

  async function handlePost() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, inputs, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      navigate(`/blog/${response.data.id}`);
      setPublishmsg(response.data.msg);
    } catch (e) {}
  }
  return (
    <div>
      <AppBar />
      <div id="publish" className="max-w-2xl mx-auto mt-16 flex flex-col ">
        <label className="block mb-2 text-sm font-medium text-slate-100 dark:text-slate-700 ml-3">
          Wanna Say something..?
        </label>
        <textarea
          id="publish-title"
          rows={2}
          className="block p-1 w-full text-6xl font-semibold text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          onChange={(e) => {
            setInputs({ ...inputs, title: e.target.value });
          }}
        ></textarea>

        <textarea
          id="publish-content"
          rows={4}
          className="block p-7 w-full text-2xl font-semibold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-750 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Describe your blog..."
          onChange={(e) => {
            setInputs({ ...inputs, content: e.target.value });
          }}
        ></textarea>

        <button
          id="publish-button"
          onClick={handlePost}
          className="translate-x-72 translate-y-[-34px] group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-green-500 hover:before:[box-shadow:_20px_20px_20px_30px_#2ecc71] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-green-500 relative bg-indigo-800 h-16 w-64 border text-left p-2 text-indigo-200 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-8 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-pink-500 after:right-8 after:top-3 after:rounded-full after:blur-lg"
        >
          Publish
        </button>
      </div>
    </div>
  );
};
