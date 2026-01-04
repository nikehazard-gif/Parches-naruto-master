import { classes } from './classes/index.js';
import db from './db.js';
import { DEFAULT_DB } from './constants.js';

export async function processBinaryData(dataReader) {
  db.data = DEFAULT_DB;

  classes.forEach((classInstance) => {
    console.log(`Reading class: ${classInstance.name}`);
    const count = dataReader.readUnsignedInt();

    for (let i = 0; i < count; i++) {
      new classInstance(dataReader);
    }
  });

  await db.write();

  return;
}
