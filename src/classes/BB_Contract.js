import db from '../db.js';
import pkg from 'lodash';

export class BB_Contract {
  constructor(dataView) {
    this.db = db.data['TBB_Contract'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Exp', dataView.readUnsignedInt());
    this.database.set('Add', dataView.readUnsignedInt());

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
