import db from '../db.js';
import pkg from 'lodash';

export class ActivityTask {
  constructor(dataView) {
    this.db = db.data['TActivityTask'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Tasktype', dataView.readUnsignedInt());
    this.database.set('TaskName', dataView.readUTF());
    this.database.set('TaskDesc', dataView.readUTF());
    this.database.set('TaskReq', dataView.readUTF());
    this.database.set('TaskPoint', dataView.readUTF());
    this.database.set('TaskAward', dataView.readUTF());
    this.database.set('Reset', dataView.readUnsignedInt());
    this.database.set('Consume', dataView.readUnsignedInt());
    this.database.set('Go', dataView.readUnsignedInt());
    this.database.set('Switch', dataView.readUnsignedInt());
    this.database.set('ClientTaskReq', dataView.readUTF());

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
