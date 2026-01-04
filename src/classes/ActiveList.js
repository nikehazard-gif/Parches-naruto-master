import db from '../db.js';
import pkg from 'lodash';

export class ActiveList {
  constructor(dataView) {
    this.db = db.data['TActiveList'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ClientAward', dataView.readUTF());
    this.database.set('Tip', dataView.readUTF());
    this.database.set('Price', dataView.readUnsignedInt());
    this.database.set('Condition', dataView.readUTF());
    this.database.set('LvLimit', dataView.readUnsignedInt());
    this.database.set('IsOn', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('AddAwardNum', dataView.readUnsignedInt());
    this.database.set('GetType', dataView.readUnsignedInt());
    this.database.set('Sort', dataView.readUnsignedInt());
    this.database.set('DayTime', dataView.readUTF());

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
