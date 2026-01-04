import db from '../db.js';
import pkg from 'lodash';

export class RaidersDailyConfig {
  constructor(dataView) {
    this.db = db.data['TRaidersDailyConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('NextHard', dataView.readUnsignedInt());
    this.database.set('Heros', dataView.readUTF());
    this.database.set('EnemyId', dataView.readUTF());
    this.database.set('RaiderAward', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());
    this.database.set('PicPath', dataView.readUnsignedInt());

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
