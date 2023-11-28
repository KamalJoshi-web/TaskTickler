import React from "react";

const TaskBox = ({ children }) => {
  return (
    <div
      className=" min-h-screen flex justify-center pt-16 
    bg-desktop-light dark:bg-desktop-dark bg-no-repeat duration-300
     max-[375px]:bg-mobile-light max-[375px]:dark:bg-mobile-dark
    "
    >
      <div className=" w-full max-w-md mx-2">{children}</div>
    </div>
  );
};

export default TaskBox;
