import db from '../db.js';
import pkg from 'lodash';

export class RefreshTalentGifts {
  constructor(dataView) {
    this.db = db.data['TRefreshTalentGifts'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Topupgifts', dataView.readUTF());
    this.database.set('Gifts', dataView.readUTF());
    this.database.set('Count', dataView.readUTF());

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
