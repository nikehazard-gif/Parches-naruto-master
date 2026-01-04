import db from '../db.js';
import pkg from 'lodash';

export class EpicConfig {
  constructor(dataView) {
    this.db = db.data['TEpicConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('CampaignName', dataView.readUTF());
    this.database.set('StageStartId', dataView.readUnsignedInt());
    this.database.set('PicID', dataView.readUnsignedInt());
    this.database.set('OpenLevel', dataView.readUnsignedInt());
    this.database.set('CampaignCount', dataView.readUnsignedInt());
    this.database.set('ReplayCost', dataView.readUTF());
    this.database.set('PointType', dataView.readUnsignedInt());

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
