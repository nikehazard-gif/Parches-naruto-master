import db from '../db.js';
import pkg from 'lodash';

export class NinjiaRecommend {
  constructor(dataView) {
    this.db = db.data['TNinjiaRecommend'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Ninjia', dataView.readUTF());
    this.database.set('Avatar', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Source', dataView.readUTF());
    this.database.set('Jump', dataView.readUnsignedInt());
    this.database.set('Page', dataView.readUnsignedInt());

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
