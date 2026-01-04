import db from '../db.js';
import pkg from 'lodash';

export class RuneAdditional {
  constructor(dataView) {
    this.db = db.data['TRuneAdditional'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('EquipLevel', dataView.readUnsignedInt());
    this.database.set('TypeEffect', dataView.readUnsignedInt());
    this.database.set('TypeEffectValue', dataView.readFloat());
    this.database.set('Percentage', dataView.readUnsignedInt());

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
