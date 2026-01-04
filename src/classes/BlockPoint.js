import db from '../db.js';
import pkg from 'lodash';

export class BlockPoint {
  constructor(dataView) {
    this.db = db.data['TBlockPoint'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Campaign', dataView.readUnsignedInt());
    this.database.set('Last', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('TransLevel', dataView.readUnsignedInt());
    this.database.set('NextPoint', dataView.readUnsignedInt());
    this.database.set('Army', dataView.readUTF());
    this.database.set('TollgatIcon', dataView.readUnsignedInt());
    this.database.set('BossIcon', dataView.readUnsignedInt());
    this.database.set('BigImage', dataView.readUnsignedInt());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Pop', dataView.readUTF());
    this.database.set('TaskId', dataView.readUTF());

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
