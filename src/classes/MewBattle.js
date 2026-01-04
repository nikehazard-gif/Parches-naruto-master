import db from '../db.js';
import pkg from 'lodash';

export class MewBattle {
  constructor(dataView) {
    this.db = db.data['TMewBattle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Location', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Armyid', dataView.readUnsignedInt());
    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('Award', dataView.readUTF());
    this.database.set('Awardex', dataView.readUTF());
    this.database.set('StageClear', dataView.readUnsignedInt());
    this.database.set('NeedLevel', dataView.readUnsignedInt());

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
