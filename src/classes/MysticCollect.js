import db from '../db.js';
import pkg from 'lodash';

export class MysticCollect {
  constructor(dataView) {
    this.db = db.data['TMysticCollect'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('CollectLv', dataView.readUnsignedInt());
    this.database.set('CollectKey', dataView.readUnsignedInt());

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
