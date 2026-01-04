import db from '../db.js';
import pkg from 'lodash';

export class PlatformID {
  constructor(dataView) {
    this.db = db.data['TPlatformID'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Platform', dataView.readUTF());
    this.database.set('Open', dataView.readUnsignedInt());
    this.database.set('BecomeMemberURL', dataView.readUTF());
    this.database.set('YearMemberURL', dataView.readUTF());
    this.database.set('MemberDescURL', dataView.readUTF());

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
