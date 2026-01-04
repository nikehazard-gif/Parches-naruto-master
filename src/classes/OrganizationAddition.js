import db from '../db.js';
import pkg from 'lodash';

export class OrganizationAddition {
  constructor(dataView) {
    this.db = db.data['TOrganizationAddition'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('OrgLevel', dataView.readUnsignedInt());
    this.database.set('AtkAddition', dataView.readUnsignedInt());
    this.database.set('AtkConsume', dataView.readUnsignedInt());
    this.database.set('PhysDefAddition', dataView.readUnsignedInt());
    this.database.set('PhysDefConsume', dataView.readUnsignedInt());
    this.database.set('MagDefAddition', dataView.readUnsignedInt());
    this.database.set('MagDefConsume', dataView.readUnsignedInt());
    this.database.set('LifeAddition', dataView.readUnsignedInt());
    this.database.set('LifeConsume', dataView.readUnsignedInt());
    this.database.set('SpeedAddition', dataView.readUnsignedInt());
    this.database.set('SpeedConsume', dataView.readUnsignedInt());

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
