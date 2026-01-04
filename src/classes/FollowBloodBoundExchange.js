import db from '../db.js';
import pkg from 'lodash';

export class FollowBloodBoundExchange {
  constructor(dataView) {
    this.db = db.data['TFollowBloodBoundExchange'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Cost', dataView.readUnsignedInt());
    this.database.set('PurgatoryID', dataView.readUnsignedInt());
    this.database.set('IsExchange', dataView.readUnsignedInt());

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
