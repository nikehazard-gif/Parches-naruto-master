import db from '../db.js';
import pkg from 'lodash';

export class SkillAura {
  constructor(dataView) {
    this.db = db.data['TSkillAura'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ResourceId', dataView.readUnsignedInt());

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
