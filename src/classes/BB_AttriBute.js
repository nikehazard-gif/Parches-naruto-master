import db from '../db.js';

export class BB_AttriBute {
  constructor(dataReader) {
    this.ID = dataReader.readUnsignedInt();
    this.data = {};

    // 1. Read the Name (which is a UTF String)
    this.data.Name = dataReader.readUTF();

    // 2. Read all 40 Level strings as defined in the AS file
    // The AS file uses TUtilityString.FetchUTF, which is equivalent to readUTF
    for (let i = 1; i <= 40; i++) {
      this.data[`Lv${i}`] = dataReader.readUTF();
    }

    // Add to database
    if (!db.data.TBB_AttriBute) {
      db.data.TBB_AttriBute = [];
    }
    db.data.TBB_AttriBute.push(this);
  }
}