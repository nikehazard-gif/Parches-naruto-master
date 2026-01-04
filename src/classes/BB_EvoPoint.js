import db from '../db.js';
import pkg from 'lodash';

export class BB_EvoPoint {
  constructor(dataView) {
    this.db = db.data['TBB_EvoPoint'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('TargetId', dataView.readUnsignedInt());
    this.database.set('GetPoint', dataView.readUnsignedInt());

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
