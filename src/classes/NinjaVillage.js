import db from '../db.js';
import pkg from 'lodash';

export class NinjaVillage {
  constructor(dataView) {
    this.db = db.data['TNinjaVillage'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('BigType', dataView.readUnsignedInt());
    this.database.set('SmallType', dataView.readUnsignedInt());
    this.database.set('Cz', dataView.readUTF());
    this.database.set('Desc1', dataView.readUTF());
    this.database.set('Desc2', dataView.readUTF());
    this.database.set('Desc3', dataView.readUTF());
    this.database.set('Desc4', dataView.readUTF());
    this.database.set('ActAward', dataView.readUTF());
    this.database.set('ClientAward', dataView.readUTF());
    this.database.set('LvBag', dataView.readUTF());
    this.database.set('Price', dataView.readUnsignedInt());
    this.database.set('DayTime', dataView.readUTF());
    this.database.set('IsOn', dataView.readUnsignedInt());
    this.database.set('ReturnRate', dataView.readUnsignedInt());
    this.database.set('MaxTime', dataView.readUnsignedInt());
    this.database.set('ReturnGold', dataView.readUnsignedInt());
    this.database.set('GoldRate', dataView.readUTF());
    this.database.set('Region', dataView.readUTF());
    this.database.set('ReturnType', dataView.readUnsignedInt());

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
