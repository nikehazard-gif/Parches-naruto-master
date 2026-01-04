import db from '../db.js';
import pkg from 'lodash';

export class Enemy {
  constructor(dataView) {
    this.db = db.data['TEnemy'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Profession', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Sex', dataView.readUnsignedInt());
    this.database.set('Hp', dataView.readUnsignedInt());
    this.database.set('Speed', dataView.readUnsignedInt());
    this.database.set('Anger', dataView.readUnsignedInt());
    this.database.set('State', dataView.readUnsignedInt());
    this.database.set('Normal', dataView.readUnsignedInt());
    this.database.set('Skill', dataView.readUnsignedInt());
    this.database.set('Effects', dataView.readUTF());
    this.database.set('TalentId', dataView.readUnsignedInt());
    this.database.set('IsBoss', dataView.readUnsignedInt());
    this.database.set('SoundId', dataView.readUnsignedInt());
    this.database.set('SkillSound', dataView.readUnsignedInt());

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
