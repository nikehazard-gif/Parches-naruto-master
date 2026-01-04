import db from '../db.js';
import pkg from 'lodash';

export class SummonBattle {
  constructor(dataView) {
    this.db = db.data['TSummonBattle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUTF());

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
