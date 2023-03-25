#!/usr/bin/env node

import { connectDB } from './db.js';
import './commands.js';

async function main() {
  await connectDB();
}

main();
