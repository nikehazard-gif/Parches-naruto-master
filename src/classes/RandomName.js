import db from '../db.js';
import pkg from 'lodash';

export class RandomName {
  constructor(dataView) {
    this.db = db.data['TRandomName'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Urname', dataView.readUTF());
    this.database.set('MenName', dataView.readUTF());
    this.database.set('MenName2', dataView.readUTF());
    this.database.set('FemaleName', dataView.readUTF());
    this.database.set('FemaleName2', dataView.readUTF());

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
