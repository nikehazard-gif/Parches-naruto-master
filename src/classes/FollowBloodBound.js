import db from '../db.js';
import pkg from 'lodash';

export class FollowBloodBound {
  constructor(dataView) {
    this.db = db.data['TFollowBloodBound'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Price', dataView.readUnsignedInt());
    this.database.set('DevourExp', dataView.readUnsignedInt());
    this.database.set('NextLevelID', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('ExpAll', dataView.readUnsignedInt());
    this.database.set('Levelcount', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('IconID', dataView.readUnsignedInt());
    this.database.set('LevelLimit', dataView.readUnsignedInt());
    this.database.set('AddAttr', dataView.readUTF());

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
