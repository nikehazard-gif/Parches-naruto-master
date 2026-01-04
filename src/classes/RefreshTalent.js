import db from '../db.js';
import pkg from 'lodash';

export class RefreshTalent {
  constructor(dataView) {
    this.db = db.data['TRefreshTalent'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('OrigionId', dataView.readUnsignedInt());
    this.database.set('Talent', dataView.readUnsignedInt());
    this.database.set('ActivateId', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());
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
