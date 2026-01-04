import db from '../db.js';
import pkg from 'lodash';

export class ActivityPetConfig {
  constructor(dataView) {
    this.db = db.data['TActivityPetConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Title', dataView.readUTF());
    this.database.set('TitleDesc', dataView.readUTF());
    this.database.set('VipLv', dataView.readUnsignedInt());
    this.database.set('UsrLv', dataView.readUnsignedInt());
    this.database.set('Time', dataView.readUTF());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('ImageId', dataView.readUnsignedInt());
    this.database.set('AddValue', dataView.readUTF());
    this.database.set('Title2Desc', dataView.readUTF());
    this.database.set('Title3Desc', dataView.readUTF());

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
