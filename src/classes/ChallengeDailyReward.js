import db from '../db.js';
import pkg from 'lodash';

export class ChallengeDailyReward {
  constructor(dataView) {
    this.db = db.data['TChallengeDailyReward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Times', dataView.readUnsignedInt());
    this.database.set('Reward', dataView.readUTF());
    this.database.set('Reward1', dataView.readUTF());

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
