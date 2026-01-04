import db from '../db.js';
import pkg from 'lodash';

export class WorldCupVo3 {
  constructor(dataView) {
    this.db = db.data['TWorldCupVo3'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('item', dataView.readUnsignedInt());
    this.database.set('num', dataView.readUnsignedInt());
    this.database.set('price', dataView.readUnsignedInt());
    this.database.set('personallimit', dataView.readUnsignedInt());
    this.database.set('servicelimit', dataView.readUnsignedInt());

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
