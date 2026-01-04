import db from '../db.js';
import pkg from 'lodash';

export class Suit {
  constructor(dataView) {
    this.db = db.data['TSuit'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('MaxCount', dataView.readUnsignedInt());
    this.database.set('SEffect', dataView.readUTF());
    this.database.set('SEffectIdDesc', dataView.readUTF());

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
