import db from '../db.js';
import pkg from 'lodash';

export class RankComposeQuality {
  constructor(dataView) {
    this.db = db.data['TRankComposeQuality'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('From', dataView.readUnsignedInt());
    this.database.set('To', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
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
