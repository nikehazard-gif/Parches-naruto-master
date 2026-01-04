import db from '../db.js';
import pkg from 'lodash';

export class NarutoRoadDayTask {
  constructor(dataView) {
    this.db = db.data['TNarutoRoadDayTask'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Tips', dataView.readUTF());
    this.database.set('According', dataView.readUnsignedInt());
    this.database.set('Description', dataView.readUTF());
    this.database.set('Accept', dataView.readUnsignedInt());
    this.database.set('Isgoto', dataView.readUnsignedInt());
    this.database.set('Picture', dataView.readUnsignedInt());

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
