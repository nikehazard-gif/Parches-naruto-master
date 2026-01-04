import db from '../db.js';
import pkg from 'lodash';

export class MasterStone {
  constructor(dataView) {
    this.db = db.data['TMasterStone'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('AllExp', dataView.readUnsignedInt());
    this.database.set('AddValue', dataView.readUTF());
    this.database.set('NextId', dataView.readUnsignedInt());
    this.database.set('ConversionId', dataView.readUnsignedInt());
    this.database.set('Costjheart', dataView.readUTF());

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
