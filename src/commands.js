import { program } from 'commander';
import inquirer from 'inquirer';

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
  console.log(answers);
});

program.parse(process.argv);
