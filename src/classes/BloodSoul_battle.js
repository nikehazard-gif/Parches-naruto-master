import db from '../db.js';
import pkg from 'lodash';

export class BloodSoul_battle {
  constructor(dataView) {
    this.db = db.data['TBloodSoul_battle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('BossName', dataView.readUTF());
    this.database.set('NeedLevel', dataView.readUnsignedInt());
    this.database.set('Location', dataView.readUnsignedInt());
    this.database.set('SStage', dataView.readUnsignedInt());
    this.database.set('SStageID', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Armyid', dataView.readUnsignedInt());
    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('Award', dataView.readUTF());
    this.database.set('Showaward', dataView.readUTF());
    this.database.set('StageClear', dataView.readUnsignedInt());

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
