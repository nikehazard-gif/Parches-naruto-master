import db from '../db.js';

export class BB_Exp {
  constructor(dataView) {
    // Initialize the storage for this specific VO if it doesn't exist
    if (!db.data['TBB_Exp']) {
      db.data['TBB_Exp'] = [];
    }
    this.db = db.data['TBB_Exp'];

    // Read the primary identifier (FIdentifier in AS)
    this.identifier = dataView.readUnsignedInt();
    
    // We use an object for 'data' to make Object.fromEntries easier later
    const dataObj = {};

    // 1. Read Name
    dataObj.Name = dataView.readUTF();

    // 2. Read Lv1 through Lv40 using a loop
    for (let i = 1; i <= 40; i++) {
      dataObj[`Lv${i}`] = dataView.readUnsignedInt();
    }

    // 3. Read the trailing PRE_EXP field
    dataObj.PRE_EXP = dataView.readUnsignedInt();

    // Push to the global database
    this.db.push({
      ID: this.identifier,
      data: dataObj,
    });
  }
}