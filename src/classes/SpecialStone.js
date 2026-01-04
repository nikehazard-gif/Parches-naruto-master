import db from '../db.js';
import pkg from 'lodash';

export class SpecialStone {
  constructor(dataView) {
    this.db = db.data['TSpecialStone'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Pid', dataView.readUnsignedInt());
    this.database.set('NextId', dataView.readUnsignedInt());
    this.database.set('Star', dataView.readUnsignedInt());
    this.database.set('LevelLimit', dataView.readUnsignedInt());
    this.database.set('NormalExp', dataView.readUnsignedInt());
    this.database.set('GoldExp', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('Power', dataView.readUnsignedInt());
    this.database.set('Agile', dataView.readUnsignedInt());
    this.database.set('Intelligence', dataView.readUnsignedInt());
    this.database.set('Life', dataView.readUnsignedInt());
    this.database.set('Hurtrate', dataView.readUnsignedInt());
    this.database.set('Damagerate', dataView.readUnsignedInt());
    this.database.set('Avoidrate', dataView.readUnsignedInt());
    this.database.set('Costmoney', dataView.readUnsignedInt());
    this.database.set('Costgold', dataView.readUnsignedInt());
    this.database.set('Costitem', dataView.readUTF());
    this.database.set('NormalType', dataView.readUTF());
    this.database.set('GoldType', dataView.readUTF());

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
