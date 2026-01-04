import db from '../db.js';
import pkg from 'lodash';

export class TreeChest {
  constructor(dataView) {
    this.db = db.data['TTreeChest'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('TreeLv', dataView.readUnsignedInt());
    this.database.set('Count', dataView.readUnsignedInt());
    this.database.set('VipLv', dataView.readUnsignedInt());
    this.database.set('Rewards', dataView.readUTF());

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
