import db from '../db.js';
import pkg from 'lodash';

export class ItemBox {
  constructor(dataView) {
    this.db = db.data['TItemBox'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ArticleId', dataView.readUnsignedInt());
    this.database.set('Reward', dataView.readUnsignedInt());

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
