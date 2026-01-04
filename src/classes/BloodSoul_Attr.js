import db from '../db.js';
import pkg from 'lodash';

export class BloodSoul_Attr {
  constructor(dataView) {
    this.db = db.data['TBloodSoul_Attr'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('ExpAll', dataView.readUnsignedInt());
    this.database.set('NeedSilver', dataView.readUnsignedInt());
    this.database.set('SilverExp', dataView.readUnsignedInt());
    this.database.set('Life', dataView.readUnsignedInt());
    this.database.set('NeedBlock', dataView.readUnsignedInt());
    this.database.set('NeedLevel', dataView.readUnsignedInt());

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
