import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function EditForm({ handleEdit, defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    handleEdit(value);
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Update
      </Button>
    </Box>
  );
}

export default EditForm;
