import db from '../db.js';
import pkg from 'lodash';

export class TheFirstRecharge {
  constructor(dataView) {
    this.db = db.data['TheFirstRecharge'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('name', dataView.readUTF());
    this.database.set('bigType', dataView.readUnsignedInt());
    this.database.set('smallType', dataView.readUnsignedInt());
    this.database.set('desc', dataView.readUTF());
    this.database.set('actAward', dataView.readUTF());
    this.database.set('recharge', dataView.readUnsignedInt());
    this.database.set('price', dataView.readUnsignedInt());
    this.database.set('isOn', dataView.readUnsignedInt());
    this.database.set('endTime', dataView.readUnsignedInt());

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
