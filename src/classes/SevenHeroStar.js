import db from '../db.js';
import pkg from 'lodash';

export class SevenHeroStar {
  constructor(dataView) {
    this.db = db.data['TSevenHeroStar'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Position', dataView.readUnsignedInt());
    this.database.set('SevenHeroId', dataView.readUnsignedInt());
    this.database.set('HeroName', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('FinalStarName', dataView.readUTF());
    this.database.set('AddValue', dataView.readUTF());

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
