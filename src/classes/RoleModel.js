import db from '../db.js';
import pkg from 'lodash';

export class RoleModel {
  constructor(dataView) {
    this.db = db.data['TRoleModel'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Model', dataView.readUnsignedInt());
    this.database.set('RoleStyle', dataView.readUnsignedInt());
    this.database.set('RoleHead', dataView.readUnsignedInt());

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
