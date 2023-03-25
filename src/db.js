import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

const { connect, connection } = mongoose;

const connectDB = async () => {
  await connect(MONGODB_URI);
};

const closeConnection = async () => {
  await connection.close();
};

export { connectDB, closeConnection };
