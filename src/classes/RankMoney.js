import db from '../db.js';
import pkg from 'lodash';

export class RankMoney {
  constructor(dataView) {
    this.db = db.data['TRankMoney'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Prestige', dataView.readUnsignedInt());

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
