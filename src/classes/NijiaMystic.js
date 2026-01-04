import db from '../db.js';
import pkg from 'lodash';

export class NijiaMystic {
  constructor(dataView) {
    this.db = db.data['TNijiaMystic'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('OccultEffectLv', dataView.readUnsignedInt());
    this.database.set('OccultEffectKey', dataView.readUnsignedInt());
    this.database.set('ConsumeOccultPoint', dataView.readUnsignedInt());
    this.database.set('ConsumeExtra', dataView.readUTF());
    this.database.set('Propsname', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());

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
