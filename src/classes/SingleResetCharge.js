import db from '../db.js';
import pkg from 'lodash';

export class SingleResetCharge {
  constructor(dataView) {
    this.db = db.data['TSingleResetCharge'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Value', dataView.readUnsignedInt());

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
