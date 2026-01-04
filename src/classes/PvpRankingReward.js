import db from '../db.js';
import pkg from 'lodash';

export class PvpRankingReward {
  constructor(dataView) {
    this.db = db.data['TPvpRankingReward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Rewardid', dataView.readUTF());
    this.database.set('Tips', dataView.readUTF());

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
