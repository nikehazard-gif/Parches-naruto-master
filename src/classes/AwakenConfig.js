import db from '../db.js';
import pkg from 'lodash';

export class AwakenConfig {
  constructor(dataView) {
    this.db = db.data['TAwakenConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Icon', dataView.readUnsignedInt());
    this.database.set('Order', dataView.readUnsignedInt());
    this.database.set('Decomposition', dataView.readUnsignedInt());
    this.database.set('StackNum', dataView.readUnsignedInt());
    this.database.set('Name2', dataView.readUTF());

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
