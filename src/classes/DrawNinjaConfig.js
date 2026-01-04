import db from '../db.js';
import pkg from 'lodash';

export class DrawNinjaConfig {
  constructor(dataView) {
    this.db = db.data['TDrawNinjaConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ActivationNum', dataView.readUnsignedInt());
    this.database.set('AddAttribute', dataView.readUTF());
    this.database.set('Topupgifts', dataView.readUTF());
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
