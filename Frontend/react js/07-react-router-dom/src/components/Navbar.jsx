import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Logo</Link>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyleType: "none",
          gap: "10px",
          fontWeight: "bold",
        }}
      >
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;  
