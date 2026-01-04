import db from '../db.js';
import pkg from 'lodash';

export class NightPowerPrivilege {
  constructor(dataView) {
    this.db = db.data['TNightPowerPrivilege'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('Price', dataView.readUnsignedInt());
    this.database.set('Needlevel', dataView.readUnsignedInt());
    this.database.set('Icon', dataView.readUnsignedInt());
    this.database.set('IsHold', dataView.readUnsignedInt());
    this.database.set('QuickLinks', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUTF());
    this.database.set('AddAttr', dataView.readUTF());
    this.database.set('DescPrivilege', dataView.readUTF());

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
