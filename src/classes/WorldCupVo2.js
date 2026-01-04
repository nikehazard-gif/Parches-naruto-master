import db from '../db.js';
import pkg from 'lodash';

export class WorldCupVo2 {
  constructor(dataView) {
    this.db = db.data['TWorldCupVo2'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('hometeam', dataView.readUnsignedInt());
    this.database.set('guestteam', dataView.readUnsignedInt());
    this.database.set('matchday', dataView.readUnsignedInt());
    this.database.set('deadline', dataView.readUnsignedInt());
    this.database.set('win', dataView.readUnsignedInt());
    this.database.set('draw', dataView.readUnsignedInt());
    this.database.set('defeat', dataView.readUnsignedInt());
    this.database.set('single', dataView.readUnsignedInt());
    this.database.set('max', dataView.readUnsignedInt());
    this.database.set('results', dataView.readUnsignedInt());
    this.database.set('score', dataView.readUTF());
    this.database.set('currency', dataView.readUTF());
    this.database.set('awardtime', dataView.readUnsignedInt());
    this.database.set('page', dataView.readUnsignedInt());

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
