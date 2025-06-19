import { useState } from "react";

const Task1 = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        {
          text: taskInput,
          completed: false,
        },
      ]);
      setTaskInput("");
    }
  };

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleRemove = (idToRemove) => {
    setTasks(tasks.filter((task) => task.id !== idToRemove));
  };

  const handleComplete = (idToToggle) => {
    setTasks(
      tasks.map((task) =>
        task.id === idToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="d-flex mb-3">
        <div className="col-10">
          <input
            type="text"
            value={taskInput}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter a task"
          />
        </div>
        <button type="submit" className="btn btn-primary col-2">
          Add Task
        </button>
      </form>
      <h1>Tasks</h1>
      <div className="d-flex row">
        {tasks.map((task) => (
          <div key={task.id} className="col-md-4 col-10 mb-3">
            <div
              className={`card ${
                task.completed ? "border-success text-secondary" : ""
              }`}
            >
              <div className="card-body">
                <div
                  className={`flex-grow-1 
                  d-flex justify-content-between align-items-center border rounded p-2  ${
                    task.completed
                      ? "text-decoration-line-through border-secondary"
                      : "border-info p-2"
                  }`}
                >
                  <span
                    className={`flex-grow-1 ${
                      task.completed ? "text-decoration-line-through " : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleComplete(task.id)}
                      style={{ transform: "scale(1.3)", cursor: "pointer" }}
                    />
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemove(task.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {tasks.some((task) => task.completed) && (
        <div className="mt-4 text-center">
          <button
            className="btn btn-outline-secondary"
            onClick={clearCompleted}
          >
            <i className="bi bi-check-circle me-2"></i>
            Clear Completed Tasks
          </button>
        </div>
      )}
    </div>
  );
};

export default Task1;
