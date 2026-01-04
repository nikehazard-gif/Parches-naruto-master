import db from '../db.js';
import pkg from 'lodash';

export class TransmigrationTalent {
  constructor(dataView) {
    this.db = db.data['TTransmigrationTalent'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('MaxLevel', dataView.readUnsignedInt());
    this.database.set('CurLevel', dataView.readUnsignedInt());

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
