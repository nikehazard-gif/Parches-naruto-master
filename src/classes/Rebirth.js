import db from '../db.js';
import pkg from 'lodash';

export class Rebirth {
  constructor(dataView) {
    this.db = db.data['TRebirth'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Nextid', dataView.readUnsignedInt());
    this.database.set('Num', dataView.readUnsignedInt());
    this.database.set('Property', dataView.readUTF());
    this.database.set('Level', dataView.readUnsignedInt());

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
