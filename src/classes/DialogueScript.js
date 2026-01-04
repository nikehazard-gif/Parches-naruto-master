import db from '../db.js';
import pkg from 'lodash';

export class DialogueScript {
  constructor(dataView) {
    this.db = db.data['TDialogueScript'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Talk', dataView.readUTF());

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
