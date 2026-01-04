import db from '../db.js';
import pkg from 'lodash';

export class PopTips {
  constructor(dataView) {
    this.db = db.data['TPopTips'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Image', dataView.readUnsignedInt());
    this.database.set('Title', dataView.readUTF());
    this.database.set('Tips', dataView.readUTF());
    this.database.set('Panel', dataView.readUnsignedInt());
    this.database.set('OpenButton', dataView.readUTF());
    this.database.set('DownLevel', dataView.readUnsignedInt());
    this.database.set('UpLevel', dataView.readUnsignedInt());

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
