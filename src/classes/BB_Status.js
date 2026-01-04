import db from '../db.js';
import pkg from 'lodash';

export class BB_Status {
  constructor(dataView) {
    this.db = db.data['TBB_Status'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Rarity', dataView.readUnsignedInt());
    this.database.set('SmPic', dataView.readUnsignedInt());
    this.database.set('MidPic', dataView.readUnsignedInt());
    this.database.set('BigPic', dataView.readUnsignedInt());
    this.database.set('OriginLevel', dataView.readUnsignedInt());
    this.database.set('EvoLevel', dataView.readUnsignedInt());
    this.database.set('ExtraLevel', dataView.readUnsignedInt());
    this.database.set('ExtraAttr', dataView.readUTF());
    this.database.set('EvoTarget', dataView.readUTF());
    this.database.set('GetPoint', dataView.readUnsignedInt());

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
