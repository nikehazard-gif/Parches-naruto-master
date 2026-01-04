import db from '../db.js';
import pkg from 'lodash';

export class DailyWelfare_GetBack {
  constructor(dataView) {
    this.db = db.data['TDailyWelfare_GetBack'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Monster_Silver', dataView.readUnsignedInt());
    this.database.set('Monster_Exp', dataView.readUnsignedInt());
    this.database.set('OrgBattle_Silver', dataView.readUnsignedInt());
    this.database.set('OrgBattle_Exp', dataView.readUnsignedInt());
    this.database.set('OrgDefence_Silver', dataView.readUnsignedInt());
    this.database.set('OrgDefence_Exp', dataView.readUnsignedInt());
    this.database.set('Traitor_Silver', dataView.readUnsignedInt());
    this.database.set('Traitor_Exp', dataView.readUnsignedInt());
    this.database.set('Teambattle_Points', dataView.readUnsignedInt());
    this.database.set('Teambattle_Exp', dataView.readUnsignedInt());

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
