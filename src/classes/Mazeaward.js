import db from '../db.js';
import pkg from 'lodash';

export class Mazeaward {
  constructor(dataView) {
    this.db = db.data['TMazeaward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('EventPoint', dataView.readUnsignedInt());
    this.database.set('AwardLostpiece', dataView.readUnsignedInt());

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
