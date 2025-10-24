import React from "react";

const Window = ({ children, title, onClose }) => {
  return (
    <div className="window">
      <div className="window-titlebar">
        <span>{title}</span>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
