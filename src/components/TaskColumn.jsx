import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks = [], status, deleteTask }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="icon" />
        {title}
      </h2>

      {tasks
        .filter(task => task.status === status)
        .map(task => (
          <TaskCard
            key={task.id} // always use unique id
            id={task.id} // pass id for deletion
            title={task.task}
            tags={task.tags}
            deleteTask={deleteTask} // pass the delete function
          />
        ))
      }
    </section>
  );
};

export default TaskColumn;
