import db from '../db.js';
import pkg from 'lodash';

export class NightPowerConfig {
  constructor(dataView) {
    this.db = db.data['TNightPowerConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Resource', dataView.readUnsignedInt());
    this.database.set('Exp', dataView.readUnsignedInt());
    this.database.set('AllExp', dataView.readUnsignedInt());
    this.database.set('Deduction', dataView.readUnsignedInt());
    this.database.set('DailyReward', dataView.readUnsignedInt());
    this.database.set('DesLevelup', dataView.readUTF());
    this.database.set('DesPrivilege', dataView.readUTF());
    this.database.set('DesReward', dataView.readUTF());

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
