import db from '../db.js';
import pkg from 'lodash';

export class GSPVP_BattleZone {
  constructor(dataView) {
    this.db = db.data['TGSPVP_BattleZone'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('BzName', dataView.readUTF());

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
