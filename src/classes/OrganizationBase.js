import db from '../db.js';
import pkg from 'lodash';

export class OrganizationBase {
  constructor(dataView) {
    this.db = db.data['TOrganizationBase'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('OrgLevel', dataView.readUnsignedInt());
    this.database.set('OrgMaxNumber', dataView.readUnsignedInt());
    this.database.set('GetMoreSiv', dataView.readUnsignedInt());
    this.database.set('GetMoreExp', dataView.readUnsignedInt());
    this.database.set('CampUpgradeMoney', dataView.readUnsignedInt());
    this.database.set('MuyebattleUpgradeMoney', dataView.readUnsignedInt());
    this.database.set('MuyebattleUpgradeAddition', dataView.readUnsignedInt());
    this.database.set('MuyeguardUpgradeMoney', dataView.readUnsignedInt());
    this.database.set('MuyeguardUpgradeAddition', dataView.readUnsignedInt());
    this.database.set('OrgMinSumBossNumber', dataView.readUnsignedInt());

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
