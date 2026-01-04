import db from '../db.js';
import pkg from 'lodash';

export class EquipAdditional {
  constructor(dataView) {
    this.db = db.data['TEquipAdditional'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('EquipLevel', dataView.readUnsignedInt());
    this.database.set('SortNumber', dataView.readUnsignedInt());
    this.database.set('TypeEffect', dataView.readUTF());

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
