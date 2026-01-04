import db from '../db.js';
import pkg from 'lodash';

export class SinglePointPath {
  constructor(dataView) {
    this.db = db.data['TSinglePointPath'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Army', dataView.readUTF());
    this.database.set('Mapname', dataView.readUnsignedInt());

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
