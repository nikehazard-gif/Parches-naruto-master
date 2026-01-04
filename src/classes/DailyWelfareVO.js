import db from '../db.js';
import pkg from 'lodash';

export class DailyWelfareVO {
  constructor(dataView) {
    this.db = db.data['TDailyWelfareVO'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('PlayLevel', dataView.readUnsignedInt());
    this.database.set('LevelCoefficient', dataView.readFloat());
    this.database.set('ActiveExp', dataView.readUnsignedInt());
    this.database.set('DailySilver', dataView.readUnsignedInt());

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
