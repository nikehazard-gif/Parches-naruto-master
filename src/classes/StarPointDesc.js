import db from '../db.js';
import pkg from 'lodash';

export class StarPointDesc {
  constructor(dataView) {
    this.db = db.data['TStarPointDesc'];

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
