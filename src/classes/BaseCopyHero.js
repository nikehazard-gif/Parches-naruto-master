import db from '../db.js';
import pkg from 'lodash';

export class BaseCopyHero {
  constructor(dataView) {
    this.db = db.data['TBaseCopyHero'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Desc', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());
    this.database.set('IsOpen', dataView.readUnsignedInt());
    this.database.set('HeroID', dataView.readUnsignedInt());
    this.database.set('ModelLv', dataView.readUnsignedInt());
    this.database.set('TimeLimit', dataView.readUnsignedInt());
    this.database.set('NewModelHeroId', dataView.readUnsignedInt());
    this.database.set('IsDisplay', dataView.readUnsignedInt());

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
