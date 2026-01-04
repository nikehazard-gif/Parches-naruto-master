import db from '../db.js';
import pkg from 'lodash';

export class DrawNinjaArchive {
  constructor(dataView) {
    this.db = db.data['TDrawNinjaArchive'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('AddAttribute', dataView.readUTF());
    this.database.set('Assess', dataView.readUTF());

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
