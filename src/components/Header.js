import React from "react";
import "../style/Header.css";

function Header() {
  return (
    <div className="header1">
      <h1>To-Do List</h1>
      <h4>{new Date().toDateString()}</h4>
    </div>
  );
}

export default Header;
