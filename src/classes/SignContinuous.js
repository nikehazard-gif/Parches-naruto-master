import db from '../db.js';
import pkg from 'lodash';

export class SignContinuous {
  constructor(dataView) {
    this.db = db.data['TSignContinuous'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Day', dataView.readUnsignedInt());
    this.database.set('Round', dataView.readUnsignedInt());
    this.database.set('VipCondition', dataView.readUnsignedInt());
    this.database.set('NightPowerCondition', dataView.readUnsignedInt());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Reward', dataView.readUTF());
    this.database.set('VipDouble', dataView.readUTF());
    this.database.set('NightPowerDouble', dataView.readUTF());

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
