import db from '../db.js';
import pkg from 'lodash';

export class SevenHeroSoul {
  constructor(dataView) {
    this.db = db.data['TSevenHeroSoul'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('HeroId', dataView.readUnsignedInt());
    this.database.set('Soultips', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Color', dataView.readUTF());

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
