import db from '../db.js';
import pkg from 'lodash';

export class GodtreeConfig {
  constructor(dataView) {
    this.db = db.data['TGodtreeConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('GodtreeLevel', dataView.readUnsignedInt());
    this.database.set('CostMana', dataView.readUnsignedInt());
    this.database.set('AllMana', dataView.readUnsignedInt());
    this.database.set('GainExp', dataView.readUnsignedInt());
    this.database.set('GainMana', dataView.readUnsignedInt());

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
