import db from '../db.js';
import pkg from 'lodash';

export class SlaveBleed {
  constructor(dataView) {
    this.db = db.data['TSlaveBleed'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Hours', dataView.readUnsignedInt());
    this.database.set('Cost', dataView.readUnsignedInt());

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
