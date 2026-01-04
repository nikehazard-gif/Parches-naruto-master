import db from '../db.js';
import pkg from 'lodash';

export class ArchiveSuper {
  constructor(dataView) {
    this.db = db.data['TArchiveSuper'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ActivationNum', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Formation', dataView.readUnsignedInt());
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
