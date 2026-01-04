import db from '../db.js';
import pkg from 'lodash';

export class EnchantBattle {
  constructor(dataView) {
    this.db = db.data['TEnchantBattle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Tower', dataView.readUnsignedInt());
    this.database.set('Stageid', dataView.readUnsignedInt());
    this.database.set('StageClear', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Armyid', dataView.readUnsignedInt());
    this.database.set('Award', dataView.readUTF());
    this.database.set('Awardex', dataView.readUTF());

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
