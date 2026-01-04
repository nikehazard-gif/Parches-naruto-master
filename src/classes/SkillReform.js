import db from '../db.js';
import pkg from 'lodash';

export class SkillReform {
  constructor(dataView) {
    this.db = db.data['TSkillReform'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Conditions', dataView.readUnsignedInt());
    this.database.set('Consume', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('Icon', dataView.readUnsignedInt());
    this.database.set('GetSkillId', dataView.readUnsignedInt());
    this.database.set('ReplaceSkillID', dataView.readUnsignedInt());
    this.database.set('FrameEffect', dataView.readUnsignedInt());
    this.database.set('Professor', dataView.readUnsignedInt());
    this.database.set('Subtype', dataView.readUnsignedInt());
    this.database.set('TalentType', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('NextLevelId', dataView.readUnsignedInt());
    this.database.set('NeedLevel', dataView.readUnsignedInt());
    this.database.set('Position', dataView.readUnsignedInt());

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
