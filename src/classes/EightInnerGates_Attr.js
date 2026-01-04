import db from '../db.js';
import pkg from 'lodash';

export class EightInnerGates_Attr {
  constructor(dataView) {
    this.db = db.data['TEightInnerGates_Attr'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('MajorType', dataView.readUnsignedInt());
    this.database.set('Sequence', dataView.readUnsignedInt());
    this.database.set('Consumption', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('AddAttr', dataView.readUTF());
    this.database.set('Background', dataView.readUnsignedInt());
    this.database.set('Label', dataView.readUnsignedInt());

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
