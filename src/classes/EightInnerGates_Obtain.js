import db from '../db.js';
import pkg from 'lodash';

export class EightInnerGates_Obtain {
  constructor(dataView) {
    this.db = db.data['TEightInnerGates_Obtain'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('RewardType', dataView.readUnsignedInt());
    this.database.set('BaseAward', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());

    this.compare();
  }

  compare() {
    const data = Object.fromEntries(this.database);

    this.db.push({
      ID: this.identifier,
      data,
    });
  }
}
