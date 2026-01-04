import db from '../db.js';
import pkg from 'lodash';

export class MasterStoneUpgrade {
  constructor(dataView) {
    this.db = db.data['TMasterStoneUpgrade'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('NormalDevour', dataView.readUnsignedInt());
    this.database.set('SuperDevour', dataView.readUnsignedInt());
    this.database.set('GoldExpend', dataView.readUnsignedInt());

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
