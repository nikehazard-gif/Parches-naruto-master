import db from '../db.js';
import pkg from 'lodash';

export class MasterRoadMall {
  constructor(dataView) {
    this.db = db.data['TMasterRoadMall'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('venueCondition', dataView.readUTF());
    this.database.set('dailyLimit', dataView.readUTF());
    this.database.set('consume', dataView.readUnsignedInt());
    this.database.set('itemid', dataView.readUTF());
    this.database.set('sort', dataView.readUnsignedInt());
    this.database.set('type', dataView.readUnsignedInt());

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
