import db from '../db.js';
import pkg from 'lodash';

export class ChallengeMonster {
  constructor(dataView) {
    this.db = db.data['TChallengeMonster'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('EnemyId', dataView.readUnsignedInt());
    this.database.set('Description', dataView.readUTF());

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
