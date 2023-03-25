import { program } from 'commander';
import inquirer from 'inquirer';
import {
  addTask,
  listTasks,
  deleteTask,
} from './controllers/task.controller.js';

program.command('save').action(async () => {
  const { prompt } = inquirer;
  const answers = await prompt([
    {
      type: 'input',
      message: 'Title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description',
      name: 'description',
    },
  ]);
  addTask(answers);
});

program.command('list').action(async () => listTasks());

program.command('delete <id>').action(async (id) => deleteTask(id));

program.parse(process.argv);
