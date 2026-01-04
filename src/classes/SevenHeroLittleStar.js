import db from '../db.js';
import pkg from 'lodash';

export class SevenHeroLittleStar {
  constructor(dataView) {
    this.db = db.data['TSevenHeroLittleStar'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('BigStar', dataView.readUnsignedInt());
    this.database.set('Sort', dataView.readUnsignedInt());
    this.database.set('PreLittleStar', dataView.readInt());
    this.database.set('IsLast', dataView.readUnsignedInt());
    this.database.set('CostSoulId', dataView.readUnsignedInt());
    this.database.set('CostSoul', dataView.readUnsignedInt());
    this.database.set('AddValue', dataView.readUTF());
    this.database.set('LittleStarName', dataView.readUTF());

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
