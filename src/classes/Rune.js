import db from '../db.js';
import pkg from 'lodash';

export class Rune {
  constructor(dataView) {
    this.db = db.data['TRune'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('MainType', dataView.readUnsignedInt());
    this.database.set('MainValue', dataView.readUnsignedInt());
    this.database.set('MainAdditionalType', dataView.readUnsignedInt());
    this.database.set('MainAdditionalValue', dataView.readFloat());
    this.database.set('HeroID', dataView.readUnsignedInt());
    this.database.set('SpecialType', dataView.readUnsignedInt());
    this.database.set('SpecialValue', dataView.readFloat());

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
