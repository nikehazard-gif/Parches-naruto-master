import db from '../db.js';
import pkg from 'lodash';

export class PetMonsterExp {
  constructor(dataView) {
    this.db = db.data['TPetMonsterExp'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('MonsterId', dataView.readUnsignedInt());
    this.database.set('MonsterLevel', dataView.readUnsignedInt());
    this.database.set('NeedExp', dataView.readUnsignedInt());
    this.database.set('GotExp', dataView.readUnsignedInt());
    this.database.set('AddValue', dataView.readUTF());

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
