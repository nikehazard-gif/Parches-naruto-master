import db from '../db.js';
import pkg from 'lodash';

export class GuideHero {
  constructor(dataView) {
    this.db = db.data['TGuideHero'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('BaseheroID', dataView.readUnsignedInt());
    this.database.set('OpenLV', dataView.readUnsignedInt());

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
