import db from '../db.js';
import pkg from 'lodash';

export class BaiDuMM {
  constructor(dataView) {
    this.db = db.data['TBaiDuMM'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('PlatformID', dataView.readUnsignedInt());
    this.database.set('Conditions', dataView.readUnsignedInt());
    this.database.set('RewardID', dataView.readUnsignedInt());

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
