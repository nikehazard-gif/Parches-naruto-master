import db from '../db.js';
import pkg from 'lodash';

export class NinJaPractice {
  constructor(dataView) {
    this.db = db.data['TNinJaPractice'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Lv', dataView.readUnsignedInt());
    this.database.set('Cost', dataView.readUnsignedInt());
    this.database.set('TotalCost', dataView.readUnsignedInt());
    this.database.set('AddNearAttack', dataView.readUnsignedInt());
    this.database.set('AddNearDefense', dataView.readUnsignedInt());
    this.database.set('AddStrategyAttack', dataView.readUnsignedInt());
    this.database.set('AddStrategyDefense', dataView.readUnsignedInt());
    this.database.set('AddMaxHp', dataView.readUnsignedInt());
    this.database.set('AddSpeed', dataView.readUnsignedInt());
    this.database.set('NeedTransLv', dataView.readUnsignedInt());
    this.database.set('NeedLv', dataView.readUnsignedInt());
    this.database.set('ShowLv', dataView.readUnsignedInt());

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
