import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="nav flex justify-between bg-gray-50 ">
         <Link to='/about'>
         <div className="logo ml-8">CodeBunny</div>
         </Link>

        <ul className=" flex gap-4 mr-8">
          <Link to="/">
            <li>home</li>
          </Link>

          <Link to="/news">
            <li>News</li>
          </Link>

          <Link to="/codecomponetspage">
            <li>Componets</li>
          </Link>

          <Link to='/interview'>
          <li>
            Interview
          </li>
          </Link>
        </ul>

        <div className="flex gap-3 mr-2">
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
          <div className="profile">
            <Link to="/profilepage">Profile</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
