import db from '../db.js';
import pkg from 'lodash';

export class SpiritEnergy {
  constructor(dataView) {
    this.db = db.data['TSpiritEnergy'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('EnergyLv', dataView.readUnsignedInt());
    this.database.set('EnergyLy', dataView.readUnsignedInt());
    this.database.set('UserLv', dataView.readUnsignedInt());
    this.database.set('MaxExp', dataView.readUnsignedInt());
    this.database.set('ExpAll', dataView.readUnsignedInt());
    this.database.set('GoldCost', dataView.readUnsignedInt());
    this.database.set('ItemId', dataView.readUnsignedInt());
    this.database.set('ItemCost', dataView.readUnsignedInt());
    this.database.set('BreakthroughgoldCost', dataView.readUnsignedInt());
    this.database.set('GradePromoteItemId', dataView.readUnsignedInt());
    this.database.set('Attribute', dataView.readUTF());
    this.database.set('NeedTransLv', dataView.readUnsignedInt());

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
