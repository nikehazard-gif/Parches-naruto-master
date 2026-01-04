import db from '../db.js';
import pkg from 'lodash';

export class MasterRoadEvent {
  constructor(dataView) {
    this.db = db.data['TMasterRoadEvent'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('name', dataView.readUTF());
    this.database.set('type', dataView.readUTF());
    this.database.set('venue', dataView.readUnsignedInt());
    this.database.set('description', dataView.readUTF());
    this.database.set('achievementReward', dataView.readUnsignedInt());
    this.database.set('theFunction', dataView.readUnsignedInt());
    this.database.set('getReward', dataView.readUnsignedInt());

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
