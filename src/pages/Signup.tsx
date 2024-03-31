import { SignupInput } from "@tillu002/medium-common";
import { Design } from "../components/Design";
import { LabelledInput } from "../components/Input";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useSetRecoilState } from "recoil";
import { userIdAtom } from "../atomes";
import { SignButton } from "../components/SignButton";

export const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
    bio: "",
  });

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/blogs");
    }
  }, []);
  const setUid = useSetRecoilState(userIdAtom);

  async function sendRequest() {
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
    } catch (e) {}
    console.log("Hello");
  }

  return (
    <div className=" h-screen bg-cover bg-center bg-bgabs">
      <div className="z-1">
        <Design />
      </div>
      <div className="w-full h-screen grid place-items-center z-20 opacity-100">
        <div className="w-[400px] h-[600px] bg-black flex flex-col">
          <h1 className="text-white text-center text-5xl font-bold">Signup</h1>
          <p className="text-white text-center mt-2 text-xs">
            Enter your credentials to Signin
          </p>
          <div className="mt-auto mb-auto flex flex-col justify-center items-center">
            <LabelledInput
              className="w-[300px] text-xl  p-2 rounded-md"
              label="Username"
              placeholder="e.g: Pavan Sohith"
              onChange={(e) => {
                setInputs({ ...inputs, name: e.target.value });
              }}
            />
            <LabelledInput
              className="w-[300px] text-xl  p-2 rounded-md"
              label="Email"
              type="email"
              placeholder="pavansohith@example.com"
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
            />

            <LabelledInput
              className="w-[300px] text-xl  p-2 rounded-md"
              label="Password"
              type="password"
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />

            <LabelledInput
              className="w-[300px] text-xl  p-2 rounded-md"
              label="Bio....."
              type="text"
              onChange={(e) => {
                setInputs({ ...inputs, bio: e.target.value });
              }}
            />

            <SignButton onClick={sendRequest} type="Signup" />
            <p className="text-white mt-3">
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
