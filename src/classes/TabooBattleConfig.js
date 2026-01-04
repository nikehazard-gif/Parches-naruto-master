import db from '../db.js';
import pkg from 'lodash';

export class TabooBattleConfig {
  constructor(dataView) {
    this.db = db.data['TTabooBattleConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('CampaignName', dataView.readUTF());
    this.database.set('StageStartId', dataView.readUnsignedInt());
    this.database.set('PicID', dataView.readUnsignedInt());
    this.database.set('OpenLevel', dataView.readUnsignedInt());
    this.database.set('CampaignCount', dataView.readUnsignedInt());
    this.database.set('MissionTips', dataView.readUTF());

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
