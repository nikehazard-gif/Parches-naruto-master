import db from '../db.js';
import pkg from 'lodash';

export class BB_Train {
  constructor(dataView) {
    this.db = db.data['TBB_Train'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Rarity', dataView.readUnsignedInt());
    this.database.set('TrainTime', dataView.readUnsignedInt());
    this.database.set('GetExp', dataView.readUnsignedInt());
    this.database.set('Cost', dataView.readUnsignedInt());
    this.database.set('ExtraExp1', dataView.readUTF());
    this.database.set('ExtraExp2', dataView.readUTF());
    this.database.set('ExtraExp3', dataView.readUTF());

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
