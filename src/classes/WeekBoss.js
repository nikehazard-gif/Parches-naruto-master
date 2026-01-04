import db from '../db.js';
import pkg from 'lodash';

export class WeekBoss {
  constructor(dataView) {
    this.db = db.data['TWeekBoss'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('StageName', dataView.readUTF());
    this.database.set('Armyid', dataView.readInt());
    this.database.set('Award', dataView.readUTF());
    this.database.set('Specialaward', dataView.readUTF());
    this.database.set('Model', dataView.readInt());
    this.database.set('ChallengeTimes', dataView.readInt());
    this.database.set('Heroid', dataView.readInt());
    this.database.set('Description', dataView.readUTF());

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
