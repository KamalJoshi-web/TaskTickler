import React from "react";

const RoundedButton = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`duration-200 absolute border-[2px]
   border-VeryLightGrayishBlue dark:border-VeryDarkGrayishBlue w-5 h-5 rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
