import db from '../db.js';
import pkg from 'lodash';

export class ExchangeExpCard {
  constructor(dataView) {
    this.db = db.data['TExchangeExpCard'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Grade', dataView.readUnsignedInt());
    this.database.set('Item', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Value', dataView.readUnsignedInt());

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
