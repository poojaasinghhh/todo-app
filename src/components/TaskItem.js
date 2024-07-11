import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/tasksSlice";
import {
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Checkbox,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import EditTaskDialog from "./EditTaskDialog";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = (newText) => {
    dispatch(editTask({ id: task.id, text: newText }));
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box display="flex" alignItems="center">
          <Checkbox
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
          <ListItemText
            primary={task.text}
            style={{ textDecoration: completed ? "line-through" : "none" }}
          />
        </Box>
        <Box>
          <IconButton
            onClick={() => setIsEditing(true)}
            style={{ marginRight: "10px" }}
          >
            <Edit />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </Box>
      </Box>
      <EditTaskDialog
        open={isEditing}
        onClose={() => setIsEditing(false)}
        task={task}
        onSave={handleEdit}
      />
    </ListItem>
  );
};

export default TaskItem;
