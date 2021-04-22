import React from "react";
import "../components/style.css";

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
