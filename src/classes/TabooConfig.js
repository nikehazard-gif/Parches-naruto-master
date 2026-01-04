import db from '../db.js';
import pkg from 'lodash';

export class TabooConfig {
  constructor(dataView) {
    this.db = db.data['TTabooConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Description', dataView.readUTF());
    this.database.set('Icon', dataView.readUnsignedInt());
    this.database.set('StackNum', dataView.readUnsignedInt());

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
