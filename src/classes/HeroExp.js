import db from '../db.js';
import pkg from 'lodash';

export class HeroExp {
  constructor(dataView) {
    this.db = db.data['THeroExp'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('NeedExp.High', dataView.readUnsignedInt());
    this.database.set('NeedExp.Low', dataView.readUnsignedInt());
    this.database.set('AllExp.High', dataView.readUnsignedInt());
    this.database.set('AllExp.Low', dataView.readUnsignedInt());
    this.database.set('Frontlv', dataView.readUnsignedInt());
    this.database.set('Nextlv', dataView.readUnsignedInt());

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
