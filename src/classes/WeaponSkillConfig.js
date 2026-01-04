import db from '../db.js';
import pkg from 'lodash';

export class WeaponSkillConfig {
  constructor(dataView) {
    this.db = db.data['TWeaponSkillConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Icon', dataView.readUnsignedInt());

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
