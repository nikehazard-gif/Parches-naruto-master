import db from '../db.js';
import pkg from 'lodash';

export class WingAdvanced {
  constructor(dataView) {
    this.db = db.data['TWingAdvanced'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('name', dataView.readUTF());
    this.database.set('illusionType', dataView.readUnsignedInt());
    this.database.set('description', dataView.readUTF());
    this.database.set('needStage', dataView.readUnsignedInt());
    this.database.set('expend', dataView.readUTF());
    this.database.set('addition', dataView.readUTF());
    this.database.set('additionClient', dataView.readUTF());
    this.database.set('duration', dataView.readUnsignedInt());
    this.database.set('offset', dataView.readUTF());
    this.database.set('vipLimit', dataView.readUnsignedInt());
    this.database.set('activatetime', dataView.readUnsignedInt());

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
