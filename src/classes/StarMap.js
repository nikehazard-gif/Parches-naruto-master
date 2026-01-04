import db from '../db.js';
import pkg from 'lodash';

export class StarMap {
  constructor(dataView) {
    this.db = db.data['TStarMap'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Profession', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('PointCount', dataView.readUnsignedInt());
    this.database.set('Pic', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('StartID', dataView.readUnsignedInt());

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
