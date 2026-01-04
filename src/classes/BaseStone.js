import db from '../db.js';
import pkg from 'lodash';

export class BaseStone {
  constructor(dataView) {
    this.db = db.data['TBaseStone'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('AddType', dataView.readUnsignedInt());
    this.database.set('NextId', dataView.readUnsignedInt());

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
