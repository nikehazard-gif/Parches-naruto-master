import db from '../db.js';
import pkg from 'lodash';

export class DailyOnlineReward {
  constructor(dataView) {
    this.db = db.data['TDailyOnlineReward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('NeedTime', dataView.readUnsignedInt());
    this.database.set('Reward', dataView.readUTF());
    this.database.set('Reward_wei', dataView.readUTF());
    this.database.set('GradeInterval', dataView.readUTF());

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
