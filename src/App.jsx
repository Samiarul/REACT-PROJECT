import React, { useState, useEffect } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

import todoIcon from "./assets/arrow.png";
import doingIcon from "./assets/star.png";
import doneIcon from "./assets/check-button.png";

const App = () => {
  // ✅ Safe localStorage parsing
  let oldTasks = [];
  try {
    oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  } catch (error) {
    console.warn("Invalid tasks in localStorage, resetting...");
    oldTasks = [];
  }

  const [tasks, setTasks] = useState(oldTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Delete task function
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />

      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          deleteTask={deleteTask}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          deleteTask={deleteTask}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
};

export default App;
