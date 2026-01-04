import db from '../db.js';
import pkg from 'lodash';

export class AwakenSkillConfig {
  constructor(dataView) {
    this.db = db.data['TAwakenSkillConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('SkillID', dataView.readUnsignedInt());
    this.database.set('Synthesis', dataView.readUTF());
    this.database.set('SilverSynthesis', dataView.readUnsignedInt());
    this.database.set('AddValue', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('NextSkillID', dataView.readUnsignedInt());

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
