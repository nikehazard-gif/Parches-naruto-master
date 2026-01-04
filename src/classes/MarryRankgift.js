import db from '../db.js';
import pkg from 'lodash';

export class MarryRankgift {
  constructor(dataView) {
    this.db = db.data['TMarryRankgift'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Rankmin', dataView.readInt());
    this.database.set('Rankmax', dataView.readInt());
    this.database.set('RankGift', dataView.readUTF());

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
