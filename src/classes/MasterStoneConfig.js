import db from '../db.js';
import pkg from 'lodash';

export class MasterStoneConfig {
  constructor(dataView) {
    this.db = db.data['TMasterStoneConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('UpgradeId', dataView.readUnsignedInt());
    this.database.set('Expend', dataView.readUnsignedInt());

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
