import db from '../db.js';
import pkg from 'lodash';

export class Double11Mall {
  constructor(dataView) {
    this.db = db.data['TDouble11Mall'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Itemtype', dataView.readUnsignedInt());
    this.database.set('Heroid', dataView.readUnsignedInt());
    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Maxbuy', dataView.readUnsignedInt());
    this.database.set('Amount', dataView.readUnsignedInt());
    this.database.set('Currencytype', dataView.readUnsignedInt());
    this.database.set('Price', dataView.readUnsignedInt());

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
