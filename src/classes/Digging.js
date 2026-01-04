import db from '../db.js';
import pkg from 'lodash';

export class Digging {
  constructor(dataView) {
    this.db = db.data['TDigging'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Mapid', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('Rate', dataView.readUnsignedInt());
    this.database.set('Money', dataView.readUTF());
    this.database.set('Award1', dataView.readUTF());
    this.database.set('Award2', dataView.readUTF());
    this.database.set('Digtime', dataView.readUnsignedInt());
    this.database.set('Robbery', dataView.readUnsignedInt());
    this.database.set('Robberyaward', dataView.readUnsignedInt());
    this.database.set('Digmark', dataView.readUnsignedInt());
    this.database.set('Gold', dataView.readUTF());
    this.database.set('Isgold', dataView.readUnsignedInt());
    this.database.set('Viplevel', dataView.readUnsignedInt());

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
