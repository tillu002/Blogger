import { SigninInput } from "@tillu002/medium-common";
import { LabelledInput } from "../components/Input";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useSetRecoilState } from "recoil";
import { userIdAtom } from "../atomes";
import { SignButton } from "../components/SignButton";
import { PencilAnimation } from "../components/Utils";

export const Signin = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<SigninInput>({
    username: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/blogs");
    } else {
      navigate("/");
    }
  }, []);

  const setUid = useSetRecoilState(userIdAtom);

  async function sendRequest() {
    setIsLoggedIn((prev) => !prev);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        inputs
      );


      const jwt = response.data.token;
      setUid(response.data.uid);
      localStorage.setItem("token", jwt);
      localStorage.setItem("uid", response.data.uid);
      navigate("/blogs");
      setIsLoggedIn(true);
    } catch (e) {
      setMsg("Invalid Credentials try again");
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center flex-col" >
      <article>
      <h1 className="text-center text-5xl mt-4 flex items-center gap-2 justify-center">Blogger <PencilAnimation /></h1>
      <div className="text-slate-800 text-center mt-4 items-center flex gap-2"> <hr className="bg-black w-10 h-1"/>Speak Your <strong>Mind.</strong> Shape the World.</div>
      </article>
      <div className="w-full h-screen flex items-center justify-center bg-cover bg-center mt-[-100px]">
          <div className="w-[400px] h-[450px] sm:w-[350px] sm:h-[430px] border-2 border-black flex flex-col justify-center items-center rounded-md">
            <h1 className="text-black text-center text-5xl font-bold mt-6">
              Signin
            </h1>
            <p className="text-slate-600 text-center mt-2 text-xs">
              Enter your credentials to Signin
            </p>
            {msg ? (
              <div className="font-semibold text-center mt-2 text-red-500">
                {msg}
              </div>
            ) : null}

            <div className="mt-auto mb-auto flex flex-col justify-center items-center">
              <LabelledInput
                className="w-[300px] text-xl p-2 rounded-md text-black border-[1px] border-black"
                label="Email✉️"
                type="email"
                placeholder="pavansohith@example.com"
                onChange={(e) => {
                  setInputs({ ...inputs, username: e.target.value });
                }}
              />

              <LabelledInput
                className="w-[300px] text-xl p-2 rounded-md border-[1px] border-black"
                label="Password🔒"
                type="password"
                onChange={(e) => {
                  setInputs({ ...inputs, password: e.target.value });
                }}
              />

              <SignButton onClick={sendRequest} type="Signin" isLoggedIn={isLoggedIn} />
              <p className="text-slate-900 mt-4 mb-2">
                New to Blogger?
                <Link className="underline" to={"/signup"}>
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
        </div>
  );
};
