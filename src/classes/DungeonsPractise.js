import db from '../db.js';
import pkg from 'lodash';

export class DungeonsPractise {
  constructor(dataView) {
    this.db = db.data['TDungeonsPractise'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('CampaignName', dataView.readUTF());
    this.database.set('NeedStageId', dataView.readUnsignedInt());
    this.database.set('LevelRange', dataView.readUTF());
    this.database.set('RandomAward', dataView.readUTF());
    this.database.set('PractiseMaxTime', dataView.readUnsignedInt());
    this.database.set('DropDesc', dataView.readUTF());

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
