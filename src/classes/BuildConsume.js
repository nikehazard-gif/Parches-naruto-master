import db from '../db.js';
import pkg from 'lodash';

export class BuildConsume {
  constructor(dataView) {
    this.db = db.data['TBuildConsume'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('BuildLevel', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Consume', dataView.readUnsignedInt());

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
