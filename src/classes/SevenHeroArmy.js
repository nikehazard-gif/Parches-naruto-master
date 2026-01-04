import db from '../db.js';
import pkg from 'lodash';

export class SevenHeroArmy {
  constructor(dataView) {
    this.db = db.data['TSevenHeroArmy'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('ServenHero', dataView.readUnsignedInt());
    this.database.set('PrePoint', dataView.readUnsignedInt());
    this.database.set('IsServenHero', dataView.readUnsignedInt());
    this.database.set('OpenLevel', dataView.readUnsignedInt());
    this.database.set('LimitLevel', dataView.readUnsignedInt());
    this.database.set('SortNumber', dataView.readUnsignedInt());
    this.database.set('OneWinBuff', dataView.readUTF());
    this.database.set('OneFailBuff', dataView.readUTF());
    this.database.set('ManyWinReward', dataView.readUTF());
    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('Model', dataView.readUnsignedInt());

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
