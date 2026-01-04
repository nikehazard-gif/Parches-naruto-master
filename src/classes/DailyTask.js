import db from '../db.js';
import pkg from 'lodash';

export class DailyTask {
  constructor(dataView) {
    this.db = db.data['TDailyTask'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('EventType', dataView.readUnsignedInt());
    this.database.set('Rewards', dataView.readUTF());
    this.database.set('Smallpicture', dataView.readUnsignedInt());
    this.database.set('Point', dataView.readUnsignedInt());
    this.database.set('Cancel', dataView.readUnsignedInt());
    this.database.set('Taskname', dataView.readUTF());
    this.database.set('Rate', dataView.readUnsignedInt());
    this.database.set('Isgoto', dataView.readUnsignedInt());
    this.database.set('Instant', dataView.readUTF());
    this.database.set('Complete', dataView.readUnsignedInt());
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
