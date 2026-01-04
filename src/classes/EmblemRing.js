import db from '../db.js';
import pkg from 'lodash';

export class EmblemRing {
  constructor(dataView) {
    this.db = db.data['TEmblemRing'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Class', dataView.readUnsignedInt());
    this.database.set('Classlevel', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('AllExp', dataView.readUnsignedInt());
    this.database.set('Porperty', dataView.readUTF());
    this.database.set('Resource', dataView.readUnsignedInt());

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
