import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";

import deleteIcon from "../assets/delete.png";

const TaskCard = ({ id, title, tags, deleteTask }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags && tags.map((tag, index) => (
            <Tag key={index} tagName={tag} />
          ))}
        </div>

        <div className="task_delete">
          <img
            src={deleteIcon}
            className="delete_icon"
            alt="delete task"
            onClick={() => deleteTask(id)} 
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
