import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blogs } from "./components/Blogs";
import { Blog } from "./pages/Blog";
import { Publish } from "./components/Publish";
import { MyBlogs } from "./pages/MyBlogs";
import { MyProfile } from "./pages/MyProfile";
import { EditBlog } from "./pages/EditBlog";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Signin />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/myBlogs" element={<MyBlogs />} />
            <Route path="/me" element={<MyProfile />} />
            <Route path="/blog/edit/:id" element={<EditBlog />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
