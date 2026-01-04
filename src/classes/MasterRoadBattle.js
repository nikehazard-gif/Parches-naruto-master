import db from '../db.js';
import pkg from 'lodash';

export class MasterRoadBattle {
  constructor(dataView) {
    this.db = db.data['TMasterRoadBattle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('theVenue', dataView.readUnsignedInt());
    this.database.set('theFunction', dataView.readUnsignedInt());
    this.database.set('name', dataView.readUTF());
    this.database.set('stageName', dataView.readUTF());
    this.database.set('title', dataView.readUTF());
    this.database.set('needLevel', dataView.readUnsignedInt());
    this.database.set('sStageID', dataView.readUnsignedInt());
    this.database.set('armyid', dataView.readUnsignedInt());
    this.database.set('model', dataView.readUnsignedInt());
    this.database.set('award', dataView.readUTF());
    this.database.set('achievementReward', dataView.readUnsignedInt());
    this.database.set('challengeTimes', dataView.readUnsignedInt());
    this.database.set('description', dataView.readUTF());
    this.database.set('battleCondition', dataView.readUTF());

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
