import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasks =
  localStorage.getItem("task") !== null
    ? JSON.parse(localStorage.getItem("task"))
    : [];

const initialState = {
  tasks: tasks,
  completedTasks: [],
  activeTasks: tasks,
};

export const taskSlice = createSlice({
  name: "TASK",
  initialState,
  reducers: {
    // Add Task
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        text: action.payload.text,
        status: false,
      };
      state.tasks.push(task);
      state.activeTasks.push(task);
      localStorage.setItem(
        "task",
        JSON.stringify(state.tasks.map((item) => item))
      );
    },

    // Remove Task
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      state.completedTasks = state.completedTasks.filter(
        (task) => task.id !== action.payload.id
      );
      localStorage.setItem(
        "task",
        JSON.stringify(state.tasks.map((item) => item))
      );
    },

    // Change Task Status
    changeTaskStatus: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.status = !task.status;
          if (task.status === true) {
            state.activeTasks = state.activeTasks.filter(
              (task) => task.id !== action.payload.id
            );
            state.completedTasks.push(task);
          } else {
            state.completedTasks = state.completedTasks.filter(
              (task) => task.id !== action.payload.id
            );
            state.activeTasks.push(task);
          }
        }
      });
    },

    // Clear Completed Tasks
    clearCompletedTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.status === false);
      state.completedTasks = state.completedTasks.filter(
        (task) => task.status === false
      );
      localStorage.setItem(
        "task",
        JSON.stringify(state.tasks.map((item) => item))
      );
    },

    // Show Completed Tasks
    showCompletedTasks: (state, action) => {
      state.tasks = state.completedTasks.filter((task) => task.status === true);
    },

    // Show Active Tasks
    showActiveTasks: (state, action) => {
      state.tasks = state.activeTasks.filter((task) => task.status === false);
    },

    // Show All Tasks
    showAllTasks: (state, action) => {
      state.tasks = state.activeTasks.concat(state.completedTasks);
    },
  },
});

export const {
  addTask,
  removeTask,
  changeTaskStatus,
  clearCompletedTasks,
  completedTasks,
  showCompletedTasks,
  showActiveTasks,
  showAllTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
