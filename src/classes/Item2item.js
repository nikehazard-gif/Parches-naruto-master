import db from '../db.js';
import pkg from 'lodash';

export class Item2item {
  constructor(dataView) {
    this.db = db.data['TItem2item'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('RedeemPoint', dataView.readUnsignedInt());
    this.database.set('NeedPoint', dataView.readUnsignedInt());
    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Maxbuy', dataView.readUnsignedInt());
    this.database.set('Amount', dataView.readUnsignedInt());

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
