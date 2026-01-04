import db from '../db.js';
import pkg from 'lodash';

export class WuxingConfig {
  constructor(dataView) {
    this.db = db.data['TWuxingConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Enemylevel', dataView.readUnsignedInt());
    this.database.set('Xiangke', dataView.readUTF());
    this.database.set('Fanxiangke', dataView.readUTF());
    this.database.set('Xiangsheng', dataView.readUTF());

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
