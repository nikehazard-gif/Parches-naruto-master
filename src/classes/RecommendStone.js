import db from '../db.js';
import pkg from 'lodash';

export class RecommendStone {
  constructor(dataView) {
    this.db = db.data['TRecommendStone'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Stones', dataView.readUTF());

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
