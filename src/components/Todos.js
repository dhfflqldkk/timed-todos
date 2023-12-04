import React from "react";
import Todo from "./Todo";

function Todos({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Todo
          key={index}
          index={index}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default Todos;
