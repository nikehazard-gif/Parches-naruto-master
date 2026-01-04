import db from '../db.js';
import pkg from 'lodash';

export class WeddingTime {
  constructor(dataView) {
    this.db = db.data['TWeddingTime'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('StartTime', dataView.readUTF());
    this.database.set('EndTime', dataView.readUTF());

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
