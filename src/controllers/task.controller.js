import Task from '../models/task.js';
import { closeConnection } from '../db.js';

export const addTask = async (task) => {
  await Task.create(task);
  console.info('✅ new task created');
  await closeConnection();
};

export const listTasks = async () => {
  const tasks = await Task.find().lean();
  console.table(
    tasks.map((task) => ({
      id: task._id.toString(),
      title: task.title,
      description: task.description,
    }))
  );
  await closeConnection();
};

export const deleteTask = async (id) => {
  await Task.findByIdAndDelete(id);
  console.info('❌ task deleted');
  await closeConnection();
};

export const updateTasks = async (_id, task) => {
  await Task.updateOne({ _id }, task);
  console.info(`✅ task ${_id} updated`);
  await closeConnection();
};
