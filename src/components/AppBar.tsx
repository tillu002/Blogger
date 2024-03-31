import { useEffect, useState } from "react";
// import { Avatar } from "./Avatar";
import { Link, useNavigate } from "react-router-dom";
import { ExitButton } from "./ExitButton";
import { AddButton } from "./AddButton";
import { ProfileComponents } from "./Profile";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function AppBar() {
  const [isClicked, setIsClicked] = useState(false);
  const [toggle, setToggle] = useState("invisible");
  const [uName, setUName] = useState();
  const navigate = useNavigate();

  function handleClick() {
    setIsClicked(!isClicked);
    setToggle(isClicked ? "visible" : "invisible");
  }

  useEffect(() => {
    async function getUserName() {
      const res = await axios.get(`${BACKEND_URL}/api/v1/user/userDetails`, {
        headers: {
          uid: localStorage.getItem("uid"),
        },
      });
      setUName(res.data.name);
    }
    getUserName();
  }, []);
  function handleHome() {
    navigate("/blogs");
  }
  return (
    <div
      className={`flex px-10 justify-between border-b border-blue-200 items-center mb-3 l:px-5 sm:ml-3 place-items-center ${
        isClicked ? "py-3" : "py-3"
      }`}
    >
      <div className="flex" id="blogger-title">
        <img
          src="../public/icons8-blogger-100.png"
          className="w-[45px]"
          id="blogger-icon"
        />
        <div className="text-3xl ml-2">Blogger</div>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Link to={"/publish"}>
          <AddButton />
        </Link>
        <ExitButton onClick={handleHome} />
        <a onClick={handleClick} className="w-[30px] h-[30px] cursor-pointer">
          <Avatar authorName={uName} />
          <div className={`${toggle}`}>
            <ExtendAvatar />
          </div>
        </a>
      </div>
    </div>
  );
}

function ExtendAvatar() {
  return (
    <div className="flex flex-col bg-slate-700 w-[150px] h-[200px] overflow-auto items-center translate-x-[-100px] translate-y-[30px] mb-1 z-50">
      <ProfileComponents />
    </div>
  );
}

function Avatar({ authorName }: any) {
  if (authorName && authorName.length > 0) {
    return (
      <div className="flex justify-center rounded-full w-5 h-5 bg-black text-white p-4 items-center">
        {authorName[0] + authorName.split(" ")[1][0]}
      </div>
    );
  } else {
    return;
  }
}
