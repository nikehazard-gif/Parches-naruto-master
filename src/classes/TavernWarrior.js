import db from '../db.js';
import pkg from 'lodash';

export class TavernWarrior {
  constructor(dataView) {
    this.db = db.data['TTavernWarrior'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Grade', dataView.readUnsignedInt());
    this.database.set('AwardId', dataView.readUnsignedInt());
    this.database.set('ReturnType', dataView.readUnsignedInt());
    this.database.set('ReturnValue', dataView.readUnsignedInt());
    this.database.set('RecruitSoul', dataView.readUnsignedInt());
    this.database.set('RecruitName', dataView.readUTF());
    this.database.set('WinDialogue', dataView.readUTF());
    this.database.set('LoseDialogue', dataView.readUTF());
    this.database.set('Awardsoul', dataView.readUTF());

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
