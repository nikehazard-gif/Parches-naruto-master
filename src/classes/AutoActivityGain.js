import db from '../db.js';
import pkg from 'lodash';

export class AutoActivityGain {
  constructor(dataView) {
    this.db = db.data['TAutoActivityGain'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('MonsterCoin', dataView.readUnsignedInt());
    this.database.set('MonsterExp', dataView.readUnsignedInt());
    this.database.set('TraitorCoin', dataView.readUnsignedInt());
    this.database.set('TraitorExp', dataView.readUnsignedInt());

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
