import db from '../db.js';
import pkg from 'lodash';

export class BuffEffect {
  constructor(dataView) {
    this.db = db.data['TBuffEffect'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('BuffType', dataView.readUnsignedInt());
    this.database.set('Alter', dataView.readUTF());
    this.database.set('BuffKey', dataView.readUnsignedInt());
    this.database.set('Weight', dataView.readUnsignedInt());
    this.database.set('Continued', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('IconUrl', dataView.readUnsignedInt());

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
