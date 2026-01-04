import db from '../db.js';
import pkg from 'lodash';

export class ChangeHero {
  constructor(dataView) {
    this.db = db.data['TChangeHero'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Desc', dataView.readUTF());
    this.database.set('AskNeed', dataView.readUTF());
    this.database.set('AskOriginalNeed', dataView.readUTF());

    this.database.set('UpHeroID', dataView.readInt());
    this.database.set('Stype', dataView.readInt());
    this.database.set('VipLimit', dataView.readInt());

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
