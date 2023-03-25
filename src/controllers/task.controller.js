import Task from '../models/task.js';
import { closeConnection } from '../db.js';

export const add = async (task) => {
  await Task.create(task);
  await closeConnection();
};
