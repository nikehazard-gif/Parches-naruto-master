import db from '../db.js';
import pkg from 'lodash';

export class PlatformReward {
  constructor(dataView) {
    this.db = db.data['TPlatformReward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ActivityName', dataView.readUTF());
    this.database.set('PlatformID', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Member', dataView.readUnsignedInt());
    this.database.set('PrivilegeLevel', dataView.readUnsignedInt());
    this.database.set('Reward', dataView.readUTF());

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
