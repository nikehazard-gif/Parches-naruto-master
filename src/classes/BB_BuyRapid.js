import db from '../db.js';
import pkg from 'lodash';

export class BB_BuyRapid {
  constructor(dataView) {
    this.db = db.data['TBB_BuyRapid'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('Price', dataView.readUTF());
    this.database.set('Award', dataView.readUTF());

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
