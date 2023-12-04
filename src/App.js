import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "./styles.css";
import { Typography, Container } from "@mui/material";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    if (newTasks[index].completed) {
      newTasks[index].completedAt = new Date().toISOString();
    }
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h2"
        style={{ textAlign: "center", margin: "20px 0" }}
      >
        Olivia's To-Do List
      </Typography>
      <TodoForm addTask={addTask} />
      <Todos
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </Container>
  );
}

export default App;
