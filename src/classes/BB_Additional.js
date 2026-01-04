import db from '../db.js';
import pkg from 'lodash';

export class BB_Additional {
  constructor(dataView) {
    this.db = db.data['TBB_Additional'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('BaseAdditional', dataView.readUTF());
    this.database.set('NearattackRate', dataView.readUnsignedInt());
    this.database.set('StrategyattackRate', dataView.readUnsignedInt());
    this.database.set('NeardefenseRate', dataView.readUnsignedInt());
    this.database.set('StrategydefenseRate', dataView.readUnsignedInt());
    this.database.set('SpeedRate', dataView.readUnsignedInt());
    this.database.set('HpRate', dataView.readUnsignedInt());

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
