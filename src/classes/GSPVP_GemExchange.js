import db from '../db.js';
import pkg from 'lodash';

export class GSPVP_GemExchange {
  constructor(dataView) {
    this.db = db.data['TGSPVP_GemExchange'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('ItemId', dataView.readUnsignedInt());
    this.database.set('GetCount', dataView.readUnsignedInt());
    this.database.set('ExchangeItem', dataView.readUnsignedInt());
    this.database.set('ExchangeCount', dataView.readUnsignedInt());
    this.database.set('Vip', dataView.readUnsignedInt());

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
