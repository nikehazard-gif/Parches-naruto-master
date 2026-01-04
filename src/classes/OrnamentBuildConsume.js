import db from '../db.js';
import pkg from 'lodash';

export class OrnamentBuildConsume {
  constructor(dataView) {
    this.db = db.data['TOrnamentBuildConsume'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ItemId', dataView.readUTF());
    this.database.set('CostItems', dataView.readUTF());
    this.database.set('AddValue', dataView.readUnsignedInt());

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
