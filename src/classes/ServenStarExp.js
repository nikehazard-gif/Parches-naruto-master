import db from '../db.js';
import pkg from 'lodash';

export class ServenStarExp {
  constructor(dataView) {
    this.db = db.data['TServenStarExp'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Value', dataView.readUTF());

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
