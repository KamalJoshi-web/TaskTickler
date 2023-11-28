import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";
import toast from "react-hot-toast";
import { RoundedButton, InputField } from "./index";

const AddTask = () => {
  const [createTask, setCreateTask] = useState("");
  const dispatch = useDispatch();
  const handleAddTask = (e) => {
    e.preventDefault();
    if (createTask === "") {
      toast.error("Please insert some task");
    } else {
      dispatch(addTask({ text: createTask }));
      setCreateTask("");
    }
  };
  return (
    <div>
      <form className=" relative mb-5 " onSubmit={handleAddTask}>
        <RoundedButton
          type="submit"
          className="top-[26%] left-[2%]"
        ></RoundedButton>
        <InputField
          type="text"
          value={createTask}
          onChange={(e) => setCreateTask(e.target.value)}
          placeholder="Create a new task..."
        />
      </form>
    </div>
  );
};

export default AddTask;
