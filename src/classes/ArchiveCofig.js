import db from '../db.js';
import pkg from 'lodash';

export class ArchiveCofig {
  constructor(dataView) {
    this.db = db.data['TArchiveCofig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Time', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Cost', dataView.readUnsignedInt());
    this.database.set('GetExp', dataView.readUnsignedInt());

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
