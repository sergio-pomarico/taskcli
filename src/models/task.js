import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = model('task', taskSchema);
export default Task;
