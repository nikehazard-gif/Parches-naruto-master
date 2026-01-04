import db from '../db.js';
import pkg from 'lodash';

export class EightInnerGates_Mission {
  constructor(dataView) {
    this.db = db.data['TEightInnerGates_Mission'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('MajorType', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('AddAttr', dataView.readUTF());
    this.database.set('HeroTalent', dataView.readUTF());

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
