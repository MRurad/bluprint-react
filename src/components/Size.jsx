import React from "react";

const Size = ({ children, title, click, selected, disabled = true }) => {
  return (
    <li
      onClick={click}
      className={` ${
        !disabled && "opacity-20"
      } font-bold  w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg ${
        selected ? "bg-black text-white" : "bg-gray-200"
      }`}
      title={title}
    >
      <button disabled={!disabled} className={"uppercase w-full h-full"}>
        {children}
      </button>
    </li>
  );
};

export default Size;
