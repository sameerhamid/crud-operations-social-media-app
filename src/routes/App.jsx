import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

import { useState } from "react";
import PostListContextPorvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <PostListContextPorvider>
      <div>
        <div className="app_container">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <div className="content">
            <Header />
            {/* {selectedTab === "home" ? <PostList /> : <CreatePost />} */}
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </PostListContextPorvider>
  );
}

export default App;
