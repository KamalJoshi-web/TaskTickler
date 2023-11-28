import React, { useState } from "react";
import { LinkButton } from "../components/index";
import {
  clearCompletedTasks,
  showCompletedTasks,
  showActiveTasks,
  showAllTasks,
} from "../features/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const AdditionalFeatures = ({ items }) => {
  const [isActive, setIsActive] = useState({
    all: true,
    active: false,
    completed: false,
  });
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const activeTasks = useSelector((state) => state.activeTasks);
  const completedTasks = useSelector((state) => state.completedTasks);

  const handleShowCompletedTasks = () => {
    if (completedTasks.length === 0) {
      toast.error("No task is completed");
    } else {
      dispatch(showCompletedTasks());
      setIsActive({ all: false, active: false, completed: true });
    }
  };
  const handleShowActiveTasks = () => {
    const isEqual =
      tasks.length === activeTasks.length &&
      tasks.every((value) => activeTasks.includes(value));
    if (isEqual) {
      toast.success("All tasks are active");
    } else {
      dispatch(showActiveTasks());
      setIsActive({ all: false, active: true, completed: false });
    }
  };
  const handleClearCompletedTasks = () => {
    if (completedTasks.length === 0) {
      toast.error("No tasks are completed to remove");
    } else {
      dispatch(clearCompletedTasks());
      toast.success("Completed tasks are removed");
      dispatch(showAllTasks());
      setIsActive({ all: true, active: false, completed: false });
    }
  };

  return (
    <li
      className=" duration-200 relative rounded-sm border-b
       border-b-LightGrayishBlue dark:border-b-VeryDarkGrayishBlue bg-VeryLightGray
        text-VeryDarkDesaturatedBlue  shadow
    dark:bg-VeryDarkDesaturatedBlue dark:text-VeryLightGrayishBlue py-3 px-3 flex justify-between items-center"
    >
      <h5 className=" font-thin font-Josefin text-sm text-DarkGrayishBlue dark:text-DarkGrayishBlue">
        {items} items left
      </h5>
      <div className="flex gap-3 max-sm:shadow-lg duration-200 justify-center bg-VeryLightGray max-sm:py-3 dark:bg-VeryDarkDesaturatedBlue  max-sm:w-full max-sm:-ml-3  max-sm:gap-5 max-sm:absolute   max-sm:top-[200%]">
        <LinkButton
          onClick={() => {
            dispatch(showAllTasks()),
              setIsActive({ all: true, active: false, completed: false });
          }}
          focus={isActive.all}
        >
          All
        </LinkButton>
        <LinkButton onClick={handleShowActiveTasks} focus={isActive.active}>
          Active
        </LinkButton>
        <LinkButton
          onClick={handleShowCompletedTasks}
          focus={isActive.completed}
        >
          Completed
        </LinkButton>
      </div>
      <LinkButton thin={true} onClick={handleClearCompletedTasks}>
        Clear Completed
      </LinkButton>
    </li>
  );
};

export default AdditionalFeatures;
