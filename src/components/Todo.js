import React, { useState } from "react";
import EditForm from "./EditForm";
import { Checkbox, Button, Typography, Box } from "@mui/material";

function Todo({ task, index, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newText) => {
    editTask(index, newText);
    setIsEditing(false);
  };

  return (
    <Box display="flex" alignItems="center" marginBottom="10px">
      {isEditing ? (
        <EditForm handleEdit={handleEdit} />
      ) : (
        <>
          <Checkbox
            checked={task.completed}
            onChange={() => toggleComplete(index)}
          />
          <Box flexGrow={1}>
            <Typography
              variant="body1"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginLeft: "10px",
              }}
            >
              {task.text}
            </Typography>
            <Typography variant="caption" display="block">
              Created: {new Date(task.createdAt).toLocaleString()}
              {task.completed &&
                ` | Completed: ${new Date(task.completedAt).toLocaleString()}`}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => deleteTask(index)}
          >
            Delete
          </Button>
        </>
      )}
    </Box>
  );
}

export default Todo;
