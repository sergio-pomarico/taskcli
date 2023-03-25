import { connect } from 'mongoose';
import { MONGODB_URI } from './config.js';

const connectDB = async () => {
  await connect(MONGODB_URI);
  console.info('MongoDB connected');
};

export { connectDB };
