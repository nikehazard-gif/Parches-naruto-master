import db from '../db.js';
import pkg from 'lodash';

export class SevenHeroDailyAward {
  constructor(dataView) {
    this.db = db.data['TSevenHeroDailyAward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('FreeCount', dataView.readUnsignedInt());
    this.database.set('Rewards', dataView.readUTF());
    this.database.set('Cost', dataView.readUTF());
    this.database.set('Crit', dataView.readUTF());
    this.database.set('Starame', dataView.readUTF());
    this.database.set('Tips', dataView.readUTF());

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
