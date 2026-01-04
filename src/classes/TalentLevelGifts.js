import db from '../db.js';
import pkg from 'lodash';

export class TalentLevelGifts {
  constructor(dataView) {
    this.db = db.data['TTalentLevelGifts'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('TalentLevel', dataView.readUnsignedInt());
    this.database.set('Topupgifts', dataView.readUTF());
    this.database.set('Gifts', dataView.readUTF());
    this.database.set('Level', dataView.readUTF());

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
