import db from '../db.js';
import pkg from 'lodash';

export class MazeItem {
  constructor(dataView) {
    this.db = db.data['TMazeItem'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ItemId', dataView.readUnsignedInt());
    this.database.set('ItemNumber', dataView.readUnsignedInt());

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
