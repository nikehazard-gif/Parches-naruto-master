import db from '../db.js';
import pkg from 'lodash';

export class DafubenCondition {
  constructor(dataView) {
    this.db = db.data['TDafubenCondition'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Dec', dataView.readUTF());

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
