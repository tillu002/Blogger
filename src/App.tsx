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
// import PullToRefresh from 'react-pull-to-refresh';
// import { useCallback } from 'react';

function App() {
  // const handleRefresh = useCallback((): Promise<void> => {
  //   return new Promise<void>((resolve) => {
  //     // Simulate a refresh by reloading the page
  //     window.location.reload();
  //     resolve();
  //   });
  // }, []);

  return (
    <>
      <RecoilRoot>
        <BrowserRouter basename="/">
          {/* <PullToRefresh
            onRefresh={handleRefresh}
            className="overflow-y-auto h-screen"
            style={{ WebkitOverflowScrolling: 'touch' }}
          > */}
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
          {/* </PullToRefresh> */}
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
