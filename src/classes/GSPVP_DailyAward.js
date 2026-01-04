import db from '../db.js';
import pkg from 'lodash';

export class GSPVP_DailyAward {
  constructor(dataView) {
    this.db = db.data['TGSPVP_DailyAward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('CostType', dataView.readUnsignedInt());
    this.database.set('Cost', dataView.readUnsignedInt());
    this.database.set('ExchangeItem', dataView.readUTF());

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
