import db from '../db.js';
import pkg from 'lodash';

export class OrganizationDevotion {
  constructor(dataView) {
    this.db = db.data['TOrganizationDevotion'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('PlayerLevel', dataView.readUnsignedInt());
    this.database.set('DevotionSivMax', dataView.readUnsignedInt());

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
