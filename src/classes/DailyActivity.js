import db from '../db.js';
import pkg from 'lodash';

export class DailyActivity {
  constructor(dataView) {
    this.db = db.data['TDailyActivity'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ActivityType', dataView.readUnsignedInt());
    this.database.set('ActivityName', dataView.readUTF());
    this.database.set('ActivityTime', dataView.readUTF());
    this.database.set('ActivityDescription', dataView.readUTF());
    this.database.set('ActivityRewards', dataView.readUTF());
    this.database.set('ButtonState', dataView.readUTF());

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
