import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-full max-w-[1440px] mx-auto overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
