export default function TaskItem({ task, onUpdate, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onUpdate(task._id, { completed: !task.completed })}
        />
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      </div>
      <button onClick={() => onDelete(task._id)} className="text-red-500 hover:text-red-700">
        🗑️
      </button>
    </div>
  );
}
