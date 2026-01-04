import db from '../db.js';
import pkg from 'lodash';

export class GvgSlaveDrop {
  constructor(dataView) {
    this.db = db.data['TGvgSlaveDrop'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Gifts', dataView.readUTF());
    this.database.set('From', dataView.readUnsignedInt());
    this.database.set('To', dataView.readUnsignedInt());

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
