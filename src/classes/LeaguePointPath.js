import db from '../db.js';
import pkg from 'lodash';

export class LeaguePointPath {
  constructor(dataView) {
    this.db = db.data['TLeaguePointPath'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Army', dataView.readUTF());
    this.database.set('Picture', dataView.readUTF());
    this.database.set('Remarks', dataView.readUTF());
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
