import db from '../db.js';
import pkg from 'lodash';

export class MarryClass {
  constructor(dataView) {
    this.db = db.data['TMarryClass'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Stars', dataView.readInt());
    this.database.set('Quality', dataView.readInt());
    this.database.set('Picture', dataView.readInt());
    this.database.set('NeedCharm', dataView.readInt());
    this.database.set('AllCharm', dataView.readInt());
    this.database.set('Value', dataView.readUTF());
    this.database.set('LandNum', dataView.readInt());
    this.database.set('FailRate', dataView.readInt());
    this.database.set('DivorceCost', dataView.readUTF());

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
