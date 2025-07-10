import { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const getTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleAdd = async (title) => {
    const newTask = await createTask(title);
    setTasks([newTask, ...tasks]);
  };

  const handleUpdate = async (id, data) => {
    const updated = await updateTask(id, data);
    setTasks(tasks.map(t => (t._id === id ? updated : t)));
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === "all") return true;
    return filter === "completed" ? t.completed : !t.completed;
  });

  return (
    <div>
      <TaskForm onAdd={handleAdd} />
      <div className="flex gap-2 mt-4">
        {["all", "completed", "incomplete"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${filter === f ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {f === "all" ? "الكل" : f === "completed" ? "مكتملة" : "غير مكتملة"}
          </button>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {filteredTasks.map(task => (
          <TaskItem key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
