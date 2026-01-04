import db from '../db.js';
import pkg from 'lodash';

export class WorldCupVo1 {
  constructor(dataView) {
    this.db = db.data['TWorldCupVo1'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('name', dataView.readUTF());
    this.database.set('flag', dataView.readUnsignedInt());
    this.database.set('odds', dataView.readUnsignedInt());
    this.database.set('min', dataView.readUnsignedInt());
    this.database.set('max', dataView.readUnsignedInt());
    this.database.set('starttime', dataView.readUTF());
    this.database.set('endtime', dataView.readUTF());
    this.database.set('deadline', dataView.readUTF());
    this.database.set('group', dataView.readUTF());

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
