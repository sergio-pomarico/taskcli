import { program } from 'commander';
import inquirer from 'inquirer';
import { add, list } from './controllers/task.controller.js';

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
  add(answers);
});

program.command('list').action(async () => list());

program.parse(process.argv);
