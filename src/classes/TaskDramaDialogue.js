import db from '../db.js';
import pkg from 'lodash';

export class TaskDramaDialogue {
  constructor(dataView) {
    this.db = db.data['TTaskDramaDialogue'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Conversations', dataView.readUTF());

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
