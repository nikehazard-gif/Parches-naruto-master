import db from '../db.js';
import pkg from 'lodash';

export class WingUpgrade {
  constructor(dataView) {
    this.db = db.data['TWingUpgrade'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('name', dataView.readUTF());
    this.database.set('level', dataView.readUnsignedInt());
    this.database.set('showStarNum', dataView.readUnsignedInt());
    this.database.set('addAttribute', dataView.readUTF());
    this.database.set('needExp', dataView.readUnsignedInt());
    this.database.set('textureID', dataView.readUnsignedInt());

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
