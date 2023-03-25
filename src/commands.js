import { program } from 'commander';
import inquirer from 'inquirer';
import {
  addTask,
  listTasks,
  deleteTask,
  updateTasks,
} from './controllers/task.controller.js';

const questions = [
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
];

program.command('save').action(async () => {
  const { prompt } = inquirer;
  const answers = await prompt(questions);
  addTask(answers);
});

program.command('list').action(async () => listTasks());

program.command('delete <id>').action(async (id) => deleteTask(id));

program.command('update <id>').action(async (id) => {
  const { prompt } = inquirer;
  const answers = await prompt(questions);
  updateTasks(id, answers);
});

program.parse(process.argv);
