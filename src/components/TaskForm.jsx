import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-gray-800 mb-4 p-10 rounded-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-white font-bold mb-3">Add Tasks</h1>
      <input
        placeholder="Add Task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <textarea
        placeholder="Add Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 font-bold text-white">Add</button>
    </form>
    </div>
  );
}

export default TaskForm;
