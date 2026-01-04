import db from '../db.js';
import pkg from 'lodash';

export class Single {
  constructor(dataView) {
    this.db = db.data['TSingle'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('Campaign', dataView.readUnsignedInt());
    this.database.set('Hard', dataView.readUTF());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Prev', dataView.readUnsignedInt());
    this.database.set('StartId', dataView.readUnsignedInt());
    this.database.set('EndId', dataView.readUnsignedInt());
    this.database.set('RecommendForce', dataView.readUnsignedInt());
    this.database.set('BigImage', dataView.readUnsignedInt());
    this.database.set('Award', dataView.readUTF());

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
