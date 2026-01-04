import db from '../db.js';
import pkg from 'lodash';

export class ConfigValue {
  constructor(dataView) {
    this.db = db.data['TConfigValue'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    const available = dataView.readBoolean();

    if (!available) {
    }

    this.database.set('Type', dataView.readUTF());
    this.database.set('Value', dataView.readUTF());

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
