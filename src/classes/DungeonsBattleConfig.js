import db from '../db.js';
import pkg from 'lodash';

export class DungeonsBattleConfig {
  constructor(dataView) {
    this.db = db.data['TDungeonsBattleConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('CampaignName', dataView.readUTF());
    this.database.set('StageStartId', dataView.readUnsignedInt());
    this.database.set('OpenLevel', dataView.readUnsignedInt());
    this.database.set('CampaignCount', dataView.readUnsignedInt());

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
