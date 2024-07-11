import React from "react";
import { useSelector } from "react-redux";
import { List, Paper } from "@mui/material";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Paper style={{ margin: "20px auto", maxWidth: "600px", padding: "10px" }}>
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;
