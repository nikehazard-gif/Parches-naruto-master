import db from '../db.js';
import pkg from 'lodash';

export class TabooAddition {
  constructor(dataView) {
    this.db = db.data['TTabooAddition'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('AdditiveEffect', dataView.readUTF());
    this.database.set('Synthesis', dataView.readUTF());
    this.database.set('AddAttribute', dataView.readUTF());
    this.database.set('SubType', dataView.readUnsignedInt());
    this.database.set('NeedLevel', dataView.readUnsignedInt());

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
