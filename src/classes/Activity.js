import db from '../db.js';
import pkg from 'lodash';

export class Activity {
  constructor(dataView) {
    this.db = db.data['TActivity'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('TName', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('IconType', dataView.readUnsignedInt());
    this.database.set('SecondIconType', dataView.readUnsignedInt());
    this.database.set('StartIndex', dataView.readUTF());
    this.database.set('EndIndex', dataView.readUTF());
    this.database.set('Sort', dataView.readUnsignedInt());

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
