import db from '../db.js';
import pkg from 'lodash';

export class SlaveGainExp {
  constructor(dataView) {
    this.db = db.data['TSlaveGainExp'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Extractable', dataView.readUnsignedInt());
    this.database.set('Pressible', dataView.readUnsignedInt());
    this.database.set('Operation', dataView.readUnsignedInt());

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
