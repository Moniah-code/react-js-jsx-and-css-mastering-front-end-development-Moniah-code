import React, { useState, useEffect } from "react";
import Button from "./Button";

const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text, completed: false, createdAt: new Date().toISOString() },
      ]);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  return { tasks, addTask, toggleTask, deleteTask };
};

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6 sm:p-8 mt-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Task Manager
      </h2>

      {/* Task input form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </div>
      </form>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} size="sm" onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} size="sm" onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} size="sm" onClick={() => setFilter("completed")}>
          Completed
        </Button>
      </div>

      {/* Task list */}
      <ul className="space-y-3">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-4">
            No tasks found
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span
                  className={`${
                    task.completed ? "line-through text-gray-500 dark:text-gray-400" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>

      {/* Task stats */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        <p>{tasks.filter((task) => !task.completed).length} tasks remaining</p>
      </div>
    </div>
  );
};

export default TaskManager;
