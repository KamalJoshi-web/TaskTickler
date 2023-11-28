import React from "react";
import { Container, TaskBox, TaskHead, AddTask, TaskList } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Container>
      <TaskBox>
        <TaskHead />
        <AddTask />
        <TaskList />
      </TaskBox>
      <Toaster position="left" />
    </Container>
  );
};

export default App;
