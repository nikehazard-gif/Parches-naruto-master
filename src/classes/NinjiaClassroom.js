import db from '../db.js';
import pkg from 'lodash';

export class NinjiaClassroom {
  constructor(dataView) {
    this.db = db.data['TNinjiaClassroom'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Desc', dataView.readUTF());

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
