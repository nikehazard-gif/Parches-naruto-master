import db from '../db.js';
import pkg from 'lodash';

export class NarutoRoadTask {
  constructor(dataView) {
    this.db = db.data['TNarutoRoadTask'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('TaskTarget', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('TaskLocked', dataView.readUTF());
    this.database.set('Picture', dataView.readUnsignedInt());
    this.database.set('Accept', dataView.readUnsignedInt());
    this.database.set('Rewards', dataView.readUTF());
    this.database.set('RewardsVip', dataView.readUTF());
    this.database.set('Isgoto', dataView.readUnsignedInt());
    this.database.set('IsPopTip', dataView.readUnsignedInt());
    this.database.set('VipLimit', dataView.readUnsignedInt());

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
