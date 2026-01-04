import db from '../db.js';
import pkg from 'lodash';

export class BasePet {
  constructor(dataView) {
    this.db = db.data['TBasePet'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('NextId', dataView.readUnsignedInt());
    this.database.set('ReviceCount', dataView.readUnsignedInt());
    this.database.set('Star', dataView.readUnsignedInt());
    this.database.set('CanRevive', dataView.readUnsignedInt());
    this.database.set('LevelLimit', dataView.readUnsignedInt());
    this.database.set('NormalExp', dataView.readUnsignedInt());
    this.database.set('GoldExp', dataView.readUnsignedInt());
    this.database.set('FNeedExp', dataView.readUnsignedInt());
    this.database.set('Power', dataView.readUnsignedInt());
    this.database.set('Agile', dataView.readUnsignedInt());
    this.database.set('Intelligence', dataView.readUnsignedInt());
    this.database.set('Life', dataView.readUnsignedInt());
    this.database.set('Images', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());
    this.database.set('AddRate', dataView.readFloat(true));
    this.database.set('NeedTransLv', dataView.readUnsignedInt());

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
