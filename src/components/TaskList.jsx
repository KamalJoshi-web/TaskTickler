import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, changeTaskStatus } from "../features/taskSlice";
import CrossIcon from "../assets/icon-cross.svg";
import {
  RoundedButton,
  InputField,
  AdditionalFeatures,
  NoTaskAdded,
} from "./index";
import CheckIcon from "../assets/icon-check.svg";

const TaskList = () => {
  const taskList = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id} className=" relative group duration-200 ">
          {/* Task Status */}
          <RoundedButton
            className={`top-[26%] left-[2%] group 
          ${
            task.status
              ? "bg-gradient-to-tr from-LightPurple to-LightBlue border-none"
              : "hover:bg-gradient-to-tr hover:from-LightPurple hover:to-LightBlue hover:border-none"
          }
          `}
            onClick={() => dispatch(changeTaskStatus({ id: task.id }))}
          >
            <div
              className={`flex justify-center items-center  h-[18px] w-[18px]  mx-auto 
            rounded-full   ${
              task.status
                ? "bg-opacity-0 "
                : "bg-VeryLightGray dark:bg-VeryDarkDesaturatedBlue invisible group-hover:visible"
            } `}
            >
              {task.status ? <img src={CheckIcon} alt="Check Mark" /> : null}
            </div>
          </RoundedButton>

          {/* Input */}
          <InputField
            defaultValue={task.text}
            disabled={task.status}
            className={` border-b border-b-LightGrayishBlue dark:border-b-VeryDarkGrayishBlue `}
            status={task.status}
          />

          {/* Remove Task */}
          <button
            type="button"
            className="absolute invert top-[28%] left-[92%] "
            onClick={() => dispatch(removeTask({ id: task.id }))}
          >
            <img
              src={CrossIcon}
              alt="Delete Task"
              className=" w-4  invisible group-hover:visible duration-200"
            />
          </button>
        </li>
      ))}
      {taskList.length !== 0 ? (
        <AdditionalFeatures items={taskList.length} />
      ) : (
        <NoTaskAdded />
      )}
    </ul>
  );
};

export default TaskList;
