import db from '../db.js';
import pkg from 'lodash';

export class BuildValue {
  constructor(dataView) {
    this.db = db.data['TBuildValue'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('BuildLevel', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('EquipType', dataView.readUnsignedInt());
    this.database.set('Value', dataView.readUnsignedInt());

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
