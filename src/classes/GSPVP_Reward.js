import db from '../db.js';
import pkg from 'lodash';

export class GSPVP_Reward {
  constructor(dataView) {
    this.db = db.data['TGSPVP_Reward'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Condition', dataView.readUTF());
    this.database.set('From', dataView.readUnsignedInt());
    this.database.set('To', dataView.readUnsignedInt());
    this.database.set('Rewards', dataView.readUTF());

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
