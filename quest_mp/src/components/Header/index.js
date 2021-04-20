import React from "react";
import { FaUserAlt, FaSignInAlt } from "react-icons/fa";

import "../Header/header.css";
import Image from "../../images/teste.png";

const Header = () => {
  return (
    <div>
      <img src={Image}></img>
      <a href="/">
        <FaUserAlt className="login" />
      </a>
      <a href="/">
        <FaSignInAlt className="cadastro" />
      </a>
    </div>
  );
};

export default Header;
