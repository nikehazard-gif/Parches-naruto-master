import db from '../db.js';
import pkg from 'lodash';

export class SkillEffectConfig {
  constructor(dataView) {
    this.db = db.data['TSkillEffectConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Timing', dataView.readUnsignedInt());
    this.database.set('PivotX', dataView.readUnsignedInt());
    this.database.set('PivotY', dataView.readUnsignedInt());
    this.database.set('Durations', dataView.readUTF());

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
