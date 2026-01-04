import db from '../db.js';
import pkg from 'lodash';

export class Fetters {
  constructor(dataView) {
    this.db = db.data['TFetters'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('TeamId', dataView.readUnsignedInt());
    this.database.set('FriendLevel', dataView.readUnsignedInt());
    this.database.set('Combination', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Formation', dataView.readUnsignedInt());
    this.database.set('AddAttr', dataView.readUTF());
    this.database.set('AddAttrPercent', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('ExpAll', dataView.readUnsignedInt());
    this.database.set('ExpTotal', dataView.readUnsignedInt());
    this.database.set('IsMystical', dataView.readUnsignedInt());
    this.database.set('LevelLimit', dataView.readUnsignedInt());

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
