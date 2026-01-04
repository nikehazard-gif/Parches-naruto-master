import db from '../db.js';
import pkg from 'lodash';

export class City {
  constructor(dataView) {
    this.db = db.data['TCity'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Start', dataView.readUnsignedInt());
    this.database.set('Last', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Icon', dataView.readUnsignedInt());

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
