import React, { useId, forwardRef } from "react";

const InputField = forwardRef(
  ({ label, type = "text", className = "", status, ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          className={` caret-BrightBlue  text-xl font-thin py-2 rounded-sm px-10 font-Josefin w-full  shadow
          bg-VeryLightGray 
           dark:bg-VeryDarkDesaturatedBlue  duration-200 outline-none ${className} 
           ${
             status
               ? "text-LightGrayishBlue dark:text-DarkGrayishBlue  line-through"
               : "text-VeryDarkDesaturatedBlue dark:text-VeryLightGrayishBlue "
           }`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default InputField;
