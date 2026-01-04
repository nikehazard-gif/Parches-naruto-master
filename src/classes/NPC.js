import db from '../db.js';
import pkg from 'lodash';

export class NPC {
  constructor(dataView) {
    this.db = db.data['TNPC'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('NpcTitle', dataView.readUTF());
    this.database.set('Talk', dataView.readUTF());
    this.database.set('StartTime', dataView.readUnsignedInt());
    this.database.set('EndTime', dataView.readUnsignedInt());
    this.database.set('Cityid', dataView.readUnsignedInt());
    this.database.set('UserType', dataView.readUnsignedInt());
    this.database.set('X', dataView.readUnsignedInt());
    this.database.set('Y', dataView.readUnsignedInt());

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
