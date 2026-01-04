import db from '../db.js';
import pkg from 'lodash';

export class ConsumeVip {
  constructor(dataView) {
    this.db = db.data['TConsumeVip'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ConsumeCount', dataView.readUnsignedInt());
    this.database.set('DailyAward', dataView.readUTF());
    this.database.set('VipPack', dataView.readUTF());
    this.database.set('DailyItem', dataView.readUTF());
    this.database.set('Daybuy', dataView.readUnsignedInt());
    this.database.set('Price', dataView.readUnsignedInt());
    this.database.set('Tpye', dataView.readUnsignedInt());
    this.database.set('Heroid', dataView.readUnsignedInt());

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
