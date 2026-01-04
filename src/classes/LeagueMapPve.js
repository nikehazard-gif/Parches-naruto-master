import db from '../db.js';
import pkg from 'lodash';

export class LeagueMapPve {
  constructor(dataView) {
    this.db = db.data['TLeagueMapPve'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Index', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Recommendlevel', dataView.readUnsignedInt());
    this.database.set('Prev', dataView.readUnsignedInt());
    this.database.set('NextHard', dataView.readUnsignedInt());
    this.database.set('Map', dataView.readUnsignedInt());
    this.database.set('BigImage', dataView.readUnsignedInt());
    this.database.set('Award', dataView.readUTF());
    this.database.set('ExpAward', dataView.readUnsignedInt());
    this.database.set('MoneyAward', dataView.readUnsignedInt());

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
