import db from '../db.js';
import pkg from 'lodash';

export class BB_LuckyCard {
  constructor(dataView) {
    this.db = db.data['TBB_LuckyCard'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('EvoRate', dataView.readUTF());

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
