import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function TodoForm({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Add new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{ marginRight: 1, flex: "1 1 auto" }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ height: "100%", padding: "10px 16px" }}
      >
        Add
      </Button>
    </Box>
  );
}

export default TodoForm;
