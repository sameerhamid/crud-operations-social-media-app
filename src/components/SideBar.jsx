import React from "react";
import { FaHome } from "react-icons/fa";
import { RiFileAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side_bar_container">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white" aria-current="page">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item sidebar_item">
          <Link to="/create-post" className="nav-link text-white">
            <RiFileAddFill />
            <span>Create Post</span>
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <span
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Sameer</strong>
        </span>
      </div>
    </div>
  );
};

export default SideBar;
