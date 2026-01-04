import db from '../db.js';
import pkg from 'lodash';

export class Emblem {
  constructor(dataView) {
    this.db = db.data['TEmblem'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Unlockcondition', dataView.readUnsignedInt());
    this.database.set('UnlockType', dataView.readUnsignedInt());
    this.database.set('Tips', dataView.readUTF());
    this.database.set('Imageid', dataView.readUnsignedInt());
    this.database.set('Error', dataView.readUTF());
    this.database.set('AddAttribute', dataView.readUTF());

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
