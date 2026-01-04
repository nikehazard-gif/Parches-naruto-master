import db from '../db.js';
import pkg from 'lodash';

export class AwakenExploration {
  constructor(dataView) {
    this.db = db.data['TAwakenExploration'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('SubType', dataView.readUnsignedInt());
    this.database.set('Round', dataView.readUnsignedInt());
    this.database.set('CostType', dataView.readUnsignedInt());
    this.database.set('Cost', dataView.readUnsignedInt());
    this.database.set('GeneralAward', dataView.readUTF());
    this.database.set('SeniorAward', dataView.readUTF());

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
