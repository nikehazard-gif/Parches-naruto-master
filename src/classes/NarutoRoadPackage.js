import db from '../db.js';
import pkg from 'lodash';

export class NarutoRoadPackage {
  constructor(dataView) {
    this.db = db.data['TNarutoRoadPackage'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Accept', dataView.readUTF());
    this.database.set('RewardName', dataView.readUTF());
    this.database.set('Reward', dataView.readUTF());
    this.database.set('RewardNumber', dataView.readUTF());
    this.database.set('VipLimit', dataView.readUTF());
    this.database.set('RewardDiscount', dataView.readUTF());
    this.database.set('RewardOriginal', dataView.readUTF());
    this.database.set('RewardPrice', dataView.readUTF());

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
