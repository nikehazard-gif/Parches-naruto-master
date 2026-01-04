import db from '../db.js';
import pkg from 'lodash';

export class Newornament_config {
  constructor(dataView) {
    this.db = db.data['TNewornament_config'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('CampaignName', dataView.readUTF());
    this.database.set('StageStartId', dataView.readUnsignedInt());
    this.database.set('PicID', dataView.readUnsignedInt());
    this.database.set('OpenLevel', dataView.readUnsignedInt());
    this.database.set('CampaignCount', dataView.readUnsignedInt());
    this.database.set('ReplayCost', dataView.readUTF());
    this.database.set('ExpAward', dataView.readUnsignedInt());
    this.database.set('MoneyAward', dataView.readUnsignedInt());

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
