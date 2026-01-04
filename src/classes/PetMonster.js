import db from '../db.js';
import pkg from 'lodash';

export class PetMonster {
  constructor(dataView) {
    this.db = db.data['TPetMonster'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('LevelLimit', dataView.readUnsignedInt());
    this.database.set('EffectName', dataView.readUTF());

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
