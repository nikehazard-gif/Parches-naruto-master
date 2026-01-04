import db from '../db.js';
import pkg from 'lodash';

export class AwakenSkillClassification {
  constructor(dataView) {
    this.db = db.data['TAwakenSkillClassification'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Synthesis', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());

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
