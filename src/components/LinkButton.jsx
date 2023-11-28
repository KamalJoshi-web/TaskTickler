import React from "react";

const LinkButton = ({
  children,
  type = "button",
  className = "",
  thin,
  focus,
  ...props
}) => {
  return (
    <button
      type={type}
      className={` text-sm duration-200  font-Josefin font-bold    hover:text-VeryDarkGrayishBlue  dark:hover:text-LightGrayishBlue_hover  ${
        focus
          ? " text-BrightBlue dark:text-BrightBlue"
          : "text-DarkGrayishBlue dark:text-DarkGrayishBlue"
      }  ${thin && "font-thin"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
