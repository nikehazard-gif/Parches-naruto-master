import db from '../db.js';
import pkg from 'lodash';

export class SystemLanguage {
  constructor(dataView) {
    this.db = db.data['TSystemLanguage'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('IdKey', dataView.readUTF());
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
