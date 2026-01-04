import db from '../db.js';
import pkg from 'lodash';

export class SignReward {
  constructor(dataView) {
    this.db = db.data['TSignReward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Day', dataView.readUnsignedInt());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Reward', dataView.readUTF());

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
