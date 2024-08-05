
import { SignupInput } from "@tillu002/medium-common";
import { LabelledInput } from "../components/Input";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useSetRecoilState } from "recoil";
import { userIdAtom } from "../atomes";
import { SignButton } from "../components/SignButton";
import { PencilAnimation } from "../components/Utils";

export const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
    bio: "",
  });
  const [msg, setMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/blogs");
    }
  }, []);
  const setUid = useSetRecoilState(userIdAtom);

  async function sendRequest() {
    setIsLoggedIn((prev) => !prev);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        inputs
      );
      const jwt = response.data.token;
      setUid(response.data.uid);
      localStorage.setItem("token", jwt);
      localStorage.setItem("uid", response.data.uid);
      navigate("/blogs");
      setIsLoggedIn(true);
    } catch (e) {
      setMsg(
        "Bio should be 10 characters long and password should be 8 characters long"
      );
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center flex-col" >
      <article>
      <h1 className="text-center text-5xl mt-4 flex items-center gap-2 justify-center">Blogger <PencilAnimation /></h1>
      <p className="text-slate-800 text-center mt-4 items-center flex gap-2"> <hr className="bg-black w-10 h-1"/>Speak Your <strong>Mind.</strong> Shape the World.</p>
      </article>
    <div className="w-full h-screen flex items-center justify-center bg-cover bg-center mt-[-50px]">
    <div className="w-[400px] h-[600px] sm:w-[350px] border-2 border-black flex flex-col justify-center items-center rounded-md">
      <h1 className="text-black text-center text-5xl font-bold mt-6">
        Signup
      </h1>
      <p className="text-slate-600 text-center mt-2 text-xs">
        Enter your credentials to Signup
      </p>
      {msg ? (
        <div className="font-semibold text-center mt-2 text-red-500">
          {msg}
        </div>
      ) : null}

      <div className="mt-auto mb-auto flex flex-col justify-center items-center">
      <LabelledInput
              className="w-[300px] text-xl  p-2 rounded-md border-2 border-black"
              label="Username👤"
              placeholder="e.g: Pavan Tillu"
              onChange={(e) => {
                setInputs({ ...inputs, name: e.target.value });
              }}
            />
            <LabelledInput
              className="w-[300px] text-xl  p-2 rounded-md border-2 border-black"
              label="Email✉️"
              type="email"
              placeholder="abc@example.com"
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
            />

            <LabelledInput
              className="w-[300px] text-xl  p-2 rounded-md border-2 border-black"
              label="Password🔒"
              type="password"
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />

            <LabelledInput
              className="w-[300px] text-xl  p-2 rounded-md text-black border-2 border-black"
              label="Bio.....📝"
              type="text"
              onChange={(e) => {
                setInputs({ ...inputs, bio: e.target.value });
              }}
            />
            <SignButton onClick={sendRequest} type="Signup" isLoggedIn={isLoggedIn} />
            <p className="text-black mt-3">
              Already have an accoount?
              <Link className="underline" to={"/"}>
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
  );
};
