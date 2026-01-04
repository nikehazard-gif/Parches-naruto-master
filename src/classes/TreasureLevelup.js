import db from '../db.js';
import pkg from 'lodash';

export class TreasureLevelup {
  constructor(dataView) {
    this.db = db.data['TTreasureLevelup'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('NeedGold', dataView.readUnsignedInt());
    this.database.set('UpItem', dataView.readUnsignedInt());
    this.database.set('UpLevel', dataView.readUnsignedInt());

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
