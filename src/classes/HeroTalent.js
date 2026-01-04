import db from '../db.js';
import pkg from 'lodash';

export class HeroTalent {
  constructor(dataView) {
    this.db = db.data['THeroTalent'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('TalentName', dataView.readUTF());
    this.database.set('TalentDesc', dataView.readUTF());
    this.database.set('TalentEffect', dataView.readUTF());

    this.database.set('AwakeEffect1', dataView.readUTF());
    this.database.set('AwakeEffect2', dataView.readUTF());
    this.database.set('AwakeEffect3', dataView.readUTF());

    this.database.set('AwakeDesc', dataView.readUTF());

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
