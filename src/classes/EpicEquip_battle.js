import db from '../db.js';
import pkg from 'lodash';

export class EpicEquip_battle {
  constructor(dataView) {
    this.db = db.data['TEpicEquip_battle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('BossName', dataView.readUTF());
    this.database.set('Location', dataView.readUnsignedInt());
    this.database.set('SStage', dataView.readUnsignedInt());
    this.database.set('SStageID', dataView.readUnsignedInt());
    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('BaseAward', dataView.readUTF());
    this.database.set('GoldAward', dataView.readUTF());
    this.database.set('PiecepoitAward', dataView.readUTF());
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
