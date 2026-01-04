import db from '../db.js';
import pkg from 'lodash';

export class Archive {
  constructor(dataView) {
    this.db = db.data['TArchive'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Icon', dataView.readUnsignedInt());
    this.database.set('SuitId', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Amount', dataView.readUnsignedInt());
    this.database.set('Resolve', dataView.readUnsignedInt());
    this.database.set('AddAttribute', dataView.readUTF());

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
