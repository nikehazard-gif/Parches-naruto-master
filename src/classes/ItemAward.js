import db from '../db.js';
import pkg from 'lodash';

export class ItemAward {
  constructor(dataView) {
    this.db = db.data['TItemAward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Sperewards', dataView.readUTF());

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
