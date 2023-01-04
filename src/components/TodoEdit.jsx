import React, { useState } from "react";

const TodoEdit = ({ onSubmit, task, handleShowEdit }) => {
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleEdit = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task.id, newTaskName);
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleEdit} value={newTaskName} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoEdit;
