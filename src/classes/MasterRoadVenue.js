import db from '../db.js';
import pkg from 'lodash';

export class MasterRoadVenue {
  constructor(dataView) {
    this.db = db.data['TMasterRoadVenue'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('name', dataView.readUTF());
    this.database.set('allAchievePoint', dataView.readUnsignedInt());
    this.database.set('includeFunction', dataView.readUTF());
    this.database.set('medal', dataView.readUTF());
    this.database.set('medalImage', dataView.readUnsignedInt());
    this.database.set('addAttribute', dataView.readUTF());
    this.database.set('battleFunction', dataView.readUTF());

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
