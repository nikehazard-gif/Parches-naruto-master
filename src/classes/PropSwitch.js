import db from '../db.js';
import pkg from 'lodash';

export class PropSwitch {
  constructor(dataView) {
    this.db = db.data['TPropSwitch'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ExchageExp', dataView.readUnsignedInt());

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
