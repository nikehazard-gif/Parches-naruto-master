import db from '../db.js';
import pkg from 'lodash';

export class RuneEnchantValue {
  constructor(dataView) {
    this.db = db.data['TRuneEnchantValue'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Color', dataView.readUnsignedInt());
    this.database.set('Mainattribute', dataView.readUnsignedInt());
    this.database.set('Assattribute', dataView.readUnsignedInt());
    this.database.set('EnchantStone', dataView.readUnsignedInt());
    this.database.set('EnchantStoneNum', dataView.readUnsignedInt());
    this.database.set('RuneNum', dataView.readUnsignedInt());
    this.database.set('HoleNum', dataView.readUnsignedInt());

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
