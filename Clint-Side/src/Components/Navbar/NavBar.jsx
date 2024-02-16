import React from "react";
import "../Heading/Heading";
import "./NevBar.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigator = useNavigate();

  const handelheading = () => {
    navigator("/");
  };
  const handellogin = () => {
    navigator("/login");
  };

  const handelAddData = () => {
    navigator("/AddData");
  }
  return (
    <>
      <nav className="navbar">
        <div className="login">
          <button onClick={handellogin}>Login</button>
        </div>

        <div className="heading">
          <h1
            onClick={handelheading}
            contentEditable="true"
            className="heading-main"
          >
            Anime Verse
          </h1>
        </div>

        <div className="add_data">
          <button onClick={handelAddData}>Add Data</button>
        </div>
      </nav>
    </>
  );
}
