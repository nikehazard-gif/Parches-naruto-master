import db from '../db.js';
import pkg from 'lodash';

export class TavernPayConfig {
  constructor(dataView) {
    this.db = db.data['TTavernPayConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Key', dataView.readUTF());
    this.database.set('Types', dataView.readUTF());
    this.database.set('Value', dataView.readUnsignedInt());
    this.database.set('Desc', dataView.readUTF());

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
