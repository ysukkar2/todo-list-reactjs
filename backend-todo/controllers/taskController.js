const Task = require('../models/Task');

// Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

// Create new task
exports.createTask = async (req, res) => {
  const { title } = req.body;
  const task = new Task({ title });
  await task.save();
  res.status(201).json(task);
};

// Update task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = await Task.findByIdAndUpdate(
    id,
    { title, completed, updatedAt: Date.now() },
    { new: true }
  );
  res.json(task);
};

// Delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(204).send();
};
