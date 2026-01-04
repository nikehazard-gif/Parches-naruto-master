import db from '../db.js';
import pkg from 'lodash';

export class TabooBattle {
  constructor(dataView) {
    this.db = db.data['TTabooBattle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('BossName', dataView.readUTF());
    this.database.set('Location', dataView.readUnsignedInt());
    this.database.set('SStage', dataView.readUnsignedInt());
    this.database.set('LevelLimit', dataView.readUnsignedInt());
    this.database.set('Mode', dataView.readUnsignedInt());
    this.database.set('Armyid', dataView.readUnsignedInt());
    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('BaseAward', dataView.readUTF());
    this.database.set('SeniorAward', dataView.readUTF());
    this.database.set('ClearanceAward', dataView.readUTF());
    this.database.set('NextMode', dataView.readUnsignedInt());
    this.database.set('GeneralAward', dataView.readUTF());
    this.database.set('PieceAward', dataView.readUTF());

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
