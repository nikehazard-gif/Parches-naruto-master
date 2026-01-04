import db from '../db.js';
import pkg from 'lodash';

export class RingValue {
  constructor(dataView) {
    this.db = db.data['TRingValue'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('RingId', dataView.readInt());
    this.database.set('BuildLevel', dataView.readInt());
    this.database.set('Exp', dataView.readInt());
    this.database.set('Totalexp', dataView.readInt());
    this.database.set('Value', dataView.readUTF());
    this.database.set('Charm', dataView.readInt());

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
