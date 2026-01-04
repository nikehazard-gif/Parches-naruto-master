import db from '../db.js';
import pkg from 'lodash';

export class TavernGrade {
  constructor(dataView) {
    this.db = db.data['TTavernGrade'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Page', dataView.readUnsignedInt());
    this.database.set('WineLv', dataView.readUTF());
    this.database.set('PayConfigs', dataView.readUTF());
    this.database.set('Vips', dataView.readUTF());
    this.database.set('Preview', dataView.readUnsignedInt());
    this.database.set('Tips', dataView.readUTF());
    this.database.set('IsTavern', dataView.readUnsignedInt());
    this.database.set('IsViolent', dataView.readUnsignedInt());

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
