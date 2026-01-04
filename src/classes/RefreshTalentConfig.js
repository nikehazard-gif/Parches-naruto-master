import db from '../db.js';
import pkg from 'lodash';

export class RefreshTalentConfig {
  constructor(dataView) {
    this.db = db.data['TRefreshTalentConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Class', dataView.readUnsignedInt());
    this.database.set('Classlevel', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('AllExp', dataView.readUnsignedInt());
    this.database.set('Porperty', dataView.readUTF());
    this.database.set('Porpertyrate', dataView.readUTF());

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
