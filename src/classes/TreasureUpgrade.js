import db from '../db.js';
import pkg from 'lodash';

export class TreasureUpgrade {
  constructor(dataView) {
    this.db = db.data['TTreasureUpgrade'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('CostItemCount', dataView.readUnsignedInt());
    this.database.set('AddValue', dataView.readUnsignedInt());
    this.database.set('CostGold', dataView.readUnsignedInt());
    this.database.set('Decomposition', dataView.readUnsignedInt());

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
