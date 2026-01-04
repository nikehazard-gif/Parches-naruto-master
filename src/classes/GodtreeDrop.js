import db from '../db.js';
import pkg from 'lodash';

export class GodtreeDrop {
  constructor(dataView) {
    this.db = db.data['TGodtreeDrop'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('GodtreeLevel', dataView.readUnsignedInt());
    this.database.set('DropList', dataView.readUTF());
    this.database.set('Gifts', dataView.readUTF());

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
