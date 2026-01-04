import db from '../db.js';
import pkg from 'lodash';

export class Rebirth_battle {
  constructor(dataView) {
    this.db = db.data['TRebirth_battle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('BossName', dataView.readUTF());
    this.database.set('Location', dataView.readUnsignedInt());
    this.database.set('SStage', dataView.readUnsignedInt());
    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('Award', dataView.readUTF());
    this.database.set('RecommendPower', dataView.readUnsignedInt());

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
