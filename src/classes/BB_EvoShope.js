import db from '../db.js';
import pkg from 'lodash';

export class BB_EvoShope {
  constructor(dataView) {
    this.db = db.data['TBB_EvoShope'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Bbid', dataView.readUnsignedInt());
    this.database.set('Cost', dataView.readUnsignedInt());

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
