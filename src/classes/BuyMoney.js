import db from '../db.js';
import pkg from 'lodash';

export class BuyMoney {
  constructor(dataView) {
    this.db = db.data['TBuyMoney'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('CostGold', dataView.readUnsignedInt());
    this.database.set('Money', dataView.readUnsignedInt());

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
