import db from '../db.js';

export class BB_Drop {
  constructor(dataReader) {
    // Every TDatebaseVO starts with a 4-byte Unsigned Int ID
    this.ID = dataReader.readUnsignedInt();
    this.data = {};

    // 1. Read the Name (UTF String)
    this.data.Name = dataReader.readUTF();

    // 2. Read all 40 Levels (Unsigned Integers)
    // The AS file uses param1.readUnsignedInt() for all 40 levels
    for (let i = 1; i <= 40; i++) {
      this.data[`Lv${i}`] = dataReader.readUnsignedInt();
    }

    // Add to database
    if (!db.data.TBB_Drop) {
      db.data.TBB_Drop = [];
    }
    db.data.TBB_Drop.push(this);
  }
}