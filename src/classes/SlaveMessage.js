import db from '../db.js';
import pkg from 'lodash';

export class SlaveMessage {
  constructor(dataView) {
    this.db = db.data['TSlaveMessage'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('MasterTemplateId', dataView.readUnsignedInt());
    this.database.set('SlaveTemplateId', dataView.readUnsignedInt());
    this.database.set('EventName', dataView.readUTF());

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
