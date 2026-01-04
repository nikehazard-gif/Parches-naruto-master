import db from '../db.js';
import pkg from 'lodash';

export class ArchiveUpgrade {
  constructor(dataView) {
    this.db = db.data['TArchiveUpgrade'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('AllExp', dataView.readUnsignedInt());
    this.database.set('AddAttribute', dataView.readUnsignedInt());

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
