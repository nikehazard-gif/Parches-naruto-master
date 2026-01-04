import db from '../db.js';
import pkg from 'lodash';

export class NewSpring2018Config1 {
  constructor(dataView) {
    this.db = db.data['TNewSpring2018Config1'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('bigType', dataView.readUnsignedInt());
    this.database.set('remark', dataView.readUTF());
    this.database.set('id', dataView.readUnsignedInt());
    this.database.set('limit', dataView.readUnsignedInt());
    this.database.set('level', dataView.readUnsignedInt());
    this.database.set('needScore', dataView.readUnsignedInt());
    this.database.set('items', dataView.readUTF());

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
