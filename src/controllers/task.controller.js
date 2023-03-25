import Task from '../models/task.js';
import { closeConnection } from '../db.js';

export const add = async (task) => {
  await Task.create(task);
  console.info('✅ new task created');
  await closeConnection();
};

export const list = async () => {
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
