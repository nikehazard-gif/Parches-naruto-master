import db from '../db.js';
import pkg from 'lodash';

export class StarPoint {
  constructor(dataView) {
    this.db = db.data['TStarPoint'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('MapId', dataView.readUnsignedInt());
    this.database.set('Index', dataView.readUnsignedInt());
    this.database.set('IsSkill', dataView.readUnsignedInt());
    this.database.set('AddType', dataView.readUTF());
    this.database.set('NeedFetch', dataView.readUnsignedInt());
    this.database.set('NeedNewfetch', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('ServenStarLevelLimit', dataView.readUnsignedInt());
    this.database.set('Arrow', dataView.readUnsignedInt());
    this.database.set('Isgoto', dataView.readUnsignedInt());

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
