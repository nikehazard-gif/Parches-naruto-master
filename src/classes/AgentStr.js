import db from '../db.js';
import pkg from 'lodash';

export class AgentStr {
  constructor(dataView) {
    this.db = db.data['TAgentStr'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('AgentName', dataView.readUTF());
    this.database.set('Pic', dataView.readUnsignedInt());

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
