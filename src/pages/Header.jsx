import React from "react";
import { Link } from "react-router-dom";

export default function menu() {
  return (
    <div>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/About"}>About</Link>
      </li>
    </div>
  );
}
