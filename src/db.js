import { JSONFilePreset } from 'lowdb/node';
import { DEFAULT_DB } from './constants.js';

const db = await JSONFilePreset('./db.json', DEFAULT_DB);

export default db;
