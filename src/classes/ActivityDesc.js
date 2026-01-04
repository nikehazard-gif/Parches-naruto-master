import db from '../db.js';
import pkg from 'lodash';

export class ActivityDesc {
  constructor(dataView) {
    this.db = db.data['TActivityDesc'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Desc', dataView.readUTF());

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
