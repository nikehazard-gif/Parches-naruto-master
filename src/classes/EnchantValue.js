import db from '../db.js';
import pkg from 'lodash';

export class EnchantValue {
  constructor(dataView) {
    this.db = db.data['TEnchantValue'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('EquipLevel', dataView.readUTF());
    this.database.set('LevelCoefficient', dataView.readFloat());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('TypeCoefficient', dataView.readFloat());
    this.database.set('EnchantConsume', dataView.readUnsignedInt());
    this.database.set('EnchantSuccessrate', dataView.readUnsignedInt());
    this.database.set('EnchantStone', dataView.readUTF());
    this.database.set('ProtectStone', dataView.readUnsignedInt());

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
