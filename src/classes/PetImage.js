import db from '../db.js';
import pkg from 'lodash';

export class PetImage {
  constructor(dataView) {
    this.db = db.data['TPetImage'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('LockDesc', dataView.readUTF());
    this.database.set('HeadPic', dataView.readUnsignedInt());

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
