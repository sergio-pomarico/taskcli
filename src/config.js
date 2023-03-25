import dovenv from 'dotenv';

dovenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export { MONGODB_URI };
