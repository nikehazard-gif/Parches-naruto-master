import db from '../db.js';
import pkg from 'lodash';

export class MewMagic {
  constructor(dataView) {
    this.db = db.data['TMewMagic'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('NeedBlock', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readInt());
    this.database.set('ExpAll', dataView.readUnsignedInt());
    this.database.set('NeedSilver', dataView.readUnsignedInt());
    this.database.set('SilverExp', dataView.readUnsignedInt());
    this.database.set('NeedGold', dataView.readUnsignedInt());
    this.database.set('GoldExp', dataView.readUnsignedInt());
    this.database.set('NeedItem', dataView.readUnsignedInt());
    this.database.set('ItemExp', dataView.readUnsignedInt());
    this.database.set('Power', dataView.readUnsignedInt());
    this.database.set('Agile', dataView.readUnsignedInt());
    this.database.set('Intelligence', dataView.readUnsignedInt());
    this.database.set('Life', dataView.readUnsignedInt());
    this.database.set('NeedTransLv', dataView.readUnsignedInt());
    this.database.set('Nextid', dataView.readUnsignedInt());

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
