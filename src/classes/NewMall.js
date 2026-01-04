import db from '../db.js';
import pkg from 'lodash';

export class NewMall {
  constructor(dataView) {
    this.db = db.data['TNewMall'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Amount', dataView.readUnsignedInt());
    this.database.set('Currencytype', dataView.readUnsignedInt());
    this.database.set('Price', dataView.readUnsignedInt());
    this.database.set('OriginalPrice', dataView.readUnsignedInt());
    this.database.set('VipPrice', dataView.readUnsignedInt());
    this.database.set('IsHot', dataView.readUnsignedInt());
    this.database.set('Sort', dataView.readUnsignedInt());
    this.database.set('Condition', dataView.readUTF());
    this.database.set('BuyLimit', dataView.readUTF());
    this.database.set('Title', dataView.readUnsignedInt());
    this.database.set('LimitDisplay', dataView.readUnsignedInt());
    this.database.set('IsSpecialEffects', dataView.readUnsignedInt());
    this.database.set('DisplayType', dataView.readUnsignedInt());
    this.database.set('Heroid', dataView.readUnsignedInt());
    this.database.set('DisplayValue', dataView.readUTF());

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
