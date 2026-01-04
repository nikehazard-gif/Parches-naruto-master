import db from '../db.js';
import pkg from 'lodash';

export class ErrorCode {
  constructor(dataView) {
    this.db = db.data['TErrorCode'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Desc', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());

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
