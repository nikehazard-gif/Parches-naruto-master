import db from '../db.js';
import pkg from 'lodash';

export class EquipUpgrade {
  constructor(dataView) {
    this.db = db.data['TEquipUpgrade'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('GotEquipId', dataView.readUnsignedInt());
    this.database.set('Datum', dataView.readUTF());
    this.database.set('IsEpic', dataView.readUnsignedInt());

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
