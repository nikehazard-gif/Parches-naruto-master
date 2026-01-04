import db from '../db.js';
import pkg from 'lodash';

export class DailyAward {
  constructor(dataView) {
    this.db = db.data['TDailyAward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Mark', dataView.readUnsignedInt());
    this.database.set('Level1', dataView.readUnsignedInt());
    this.database.set('Rewards', dataView.readUTF());

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
