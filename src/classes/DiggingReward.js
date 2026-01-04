import db from '../db.js';
import pkg from 'lodash';

export class DiggingReward {
  constructor(dataView) {
    this.db = db.data['TDiggingReward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Reward', dataView.readUTF());
    this.database.set('RobLoss', dataView.readUTF());
    this.database.set('ProbReward', dataView.readUTF());
    this.database.set('ProbReward2', dataView.readUTF());

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
