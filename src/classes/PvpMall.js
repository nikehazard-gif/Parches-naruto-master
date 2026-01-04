import db from '../db.js';
import pkg from 'lodash';

export class PvpMall {
  constructor(dataView) {
    this.db = db.data['TPvpMall'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('MajorType', dataView.readUnsignedInt());
    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Integration', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Isvip', dataView.readUnsignedInt());
    this.database.set('Amount', dataView.readUnsignedInt());
    this.database.set('Page', dataView.readUnsignedInt());
    this.database.set('Times', dataView.readUnsignedInt());

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
