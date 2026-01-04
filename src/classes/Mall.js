import db from '../db.js';
import pkg from 'lodash';

export class Mall {
  constructor(dataView) {
    this.db = db.data['TMall'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Model', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('MajorType', dataView.readUnsignedInt());
    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUTF());
    this.database.set('Integration', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Isvip', dataView.readUnsignedInt());
    this.database.set('Display', dataView.readUnsignedInt());
    this.database.set('Amount', dataView.readUnsignedInt());
    this.database.set('Gold', dataView.readUnsignedInt());
    this.database.set('Discount', dataView.readUnsignedInt());
    this.database.set('Hotprice', dataView.readUnsignedInt());
    this.database.set('Page', dataView.readUnsignedInt());
    this.database.set('Vip', dataView.readUnsignedInt());
    this.database.set('Ishot', dataView.readUnsignedInt());
    this.database.set('Isnew', dataView.readUnsignedInt());
    this.database.set('Times', dataView.readUnsignedInt());

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
