import db from '../db.js';
import pkg from 'lodash';

export class PlaneInvasionConfig {
  constructor(dataView) {
    this.db = db.data['TPlaneInvasionConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('InCampain', dataView.readUnsignedInt());
    this.database.set('Heros', dataView.readUTF());
    this.database.set('NameTotal', dataView.readUTF());
    this.database.set('NamePart', dataView.readUTF());

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
