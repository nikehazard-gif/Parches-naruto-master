import db from '../db.js';
import pkg from 'lodash';

export class NewornamentGenerate {
  constructor(dataView) {
    this.db = db.data['TNewornamentGenerate'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('OpenLevel', dataView.readUnsignedInt());
    this.database.set('Cost', dataView.readUnsignedInt());
    this.database.set('Datum', dataView.readUTF());
    this.database.set('IsEpic', dataView.readUnsignedInt());

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
