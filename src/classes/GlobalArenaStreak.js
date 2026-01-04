import db from '../db.js';
import pkg from 'lodash';

export class GlobalArenaStreak {
  constructor(dataView) {
    this.db = db.data['TGlobalArenaStreak'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUTF());
    this.database.set('From', dataView.readUnsignedInt());
    this.database.set('Rewards', dataView.readUTF());
    this.database.set('Rewards1', dataView.readUTF());
    this.database.set('Limit', dataView.readUnsignedInt());

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
