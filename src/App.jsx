import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Pagar seguro" },
    { id: 2, name: "Estudiar React" },
  ]);

  const createTask = (newTask) => {
    const updateTasks = [...tasks, { id: Math.random() * 9999, name: newTask }];
    setTasks(updateTasks);
  };

  const deleteTaskById = (id) => {
    const updateTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updateTasks);
  };

  const editTaskById = (id, newTaskName) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: newTaskName };
      }
      return task;
    });
    setTasks(updateTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {tasks.length === 0 ? (
        <h2>Aún no tienes tareas!!</h2>
      ) : (
        <TodoList tasks={tasks} onDelete={deleteTaskById} onEdit={editTaskById} />
      )}

      <TodoCreate onCreate={createTask} />
    </div>
  );
}

export default App;
