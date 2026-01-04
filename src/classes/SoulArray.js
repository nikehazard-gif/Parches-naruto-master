import db from '../db.js';
import pkg from 'lodash';

export class SoulArray {
  constructor(dataView) {
    this.db = db.data['TSoulArray'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('name', dataView.readUTF());
    this.database.set('level', dataView.readUnsignedInt());
    this.database.set('levelDescription', dataView.readUTF());
    this.database.set('needExp', dataView.readUnsignedInt());
    this.database.set('type', dataView.readUnsignedInt());
    this.database.set('resource', dataView.readUnsignedInt());
    this.database.set('active', dataView.readUTF());
    this.database.set('attackEffect', dataView.readUTF());
    this.database.set('attackEffect1', dataView.readUTF());
    this.database.set('condition', dataView.readUTF());
    this.database.set('forwardAddition', dataView.readUTF());
    this.database.set('middleAddition', dataView.readUTF());
    this.database.set('backAddition', dataView.readUTF());
    this.database.set('skillName', dataView.readUTF());

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
