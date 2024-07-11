import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { TextField, Button, Box } from "@mui/material";

const TaskInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim()) {
      dispatch(addTask({ id: Date.now(), text }));
      setText("");
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="New Task"
        variant="outlined"
      />
      <Button
        onClick={handleAddTask}
        variant="contained"
        color="primary"
        style={{ marginLeft: "10px" }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
