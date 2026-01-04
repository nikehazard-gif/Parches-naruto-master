import db from '../db.js';
import pkg from 'lodash';

export class EnemyArmy {
  constructor(dataView) {
    this.db = db.data['TEnemyArmy'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Front', dataView.readUTF());
    this.database.set('Middle', dataView.readUTF());
    this.database.set('Back', dataView.readUTF());
    this.database.set('Text', dataView.readUTF());
    this.database.set('IsLeader', dataView.readUnsignedInt());

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
