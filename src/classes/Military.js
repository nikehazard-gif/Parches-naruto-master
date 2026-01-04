import db from '../db.js';
import pkg from 'lodash';

export class Military {
  constructor(dataView) {
    this.db = db.data['TMilitary'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('PrefixBefor', dataView.readUTF());
    this.database.set('PrefixEnd', dataView.readUTF());

    this.database.set('NeedCredit', dataView.readUnsignedInt());
    this.database.set('CostCredit', dataView.readUnsignedInt());

    this.database.set('Salary', dataView.readUTF());

    this.database.set('MaxHeroNum', dataView.readUnsignedInt());
    this.database.set('FightHeroNum', dataView.readUnsignedInt());

    this.database.set('AddOther', dataView.readUTF());

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
