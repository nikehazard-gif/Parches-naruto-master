import db from '../db.js';
import pkg from 'lodash';

export class GlobalArenaMall {
  constructor(dataView) {
    this.db = db.data['TGlobalArenaMall'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Integration', dataView.readUnsignedInt());
    this.database.set('Amount', dataView.readUnsignedInt());
    this.database.set('Page', dataView.readUnsignedInt());
    this.database.set('Heroid', dataView.readUnsignedInt());

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
