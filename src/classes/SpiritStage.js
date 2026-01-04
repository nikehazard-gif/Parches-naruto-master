import db from '../db.js';
import pkg from 'lodash';

export class SpiritStage {
  constructor(dataView) {
    this.db = db.data['TSpiritStage'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('BossName', dataView.readUTF());

    this.database.set('NeedLevel', dataView.readUnsignedInt());
    this.database.set('Armyid', dataView.readUnsignedInt());
    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('MonsterPoints', dataView.readUnsignedInt());
    this.database.set('Monsterposition', dataView.readUnsignedInt());

    this.database.set('Award', dataView.readUTF());

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
