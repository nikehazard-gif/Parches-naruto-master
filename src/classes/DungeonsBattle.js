import db from '../db.js';
import pkg from 'lodash';

export class DungeonsBattle {
  constructor(dataView) {
    this.db = db.data['TDungeonsBattle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('BossName', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('Location', dataView.readUnsignedInt());
    this.database.set('SStage', dataView.readUnsignedInt());
    this.database.set('LevelLimit', dataView.readUnsignedInt());
    this.database.set('Armyid', dataView.readUnsignedInt());
    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('BaseAward', dataView.readUTF());
    this.database.set('RandomAward', dataView.readUTF());
    this.database.set('RandomAward2', dataView.readUTF());
    this.database.set('Display', dataView.readUnsignedInt());
    this.database.set('FirstOccupationAward', dataView.readUTF());

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
