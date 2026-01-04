import db from '../db.js';
import pkg from 'lodash';

export class MusicConfig {
  constructor(dataView) {
    this.db = db.data['TMusicConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Fighting', dataView.readUnsignedInt());
    this.database.set('Background', dataView.readUnsignedInt());
    this.database.set('Istab', dataView.readUnsignedInt());

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
