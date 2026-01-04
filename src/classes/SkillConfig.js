import db from '../db.js';
import pkg from 'lodash';

export class SkillConfig {
  constructor(dataView) {
    this.db = db.data['TSkillConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Icon', dataView.readUnsignedInt());
    this.database.set('SortId', dataView.readUnsignedInt());
    this.database.set('DescReincarnation', dataView.readUTF());
    this.database.set('Effects', dataView.readUTF());
    this.database.set('Screening', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('SkillId', dataView.readUnsignedInt());
    this.database.set('Awakecost', dataView.readUTF());
    this.database.set('Awakedesc', dataView.readUTF());
    this.database.set('AwakedescRe', dataView.readUTF());

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
