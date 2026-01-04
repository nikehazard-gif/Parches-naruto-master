import db from '../db.js';
import pkg from 'lodash';

export class NinjiaQuestions {
  constructor(dataView) {
    this.db = db.data['TNinjiaQuestions'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Questions', dataView.readUTF());
    this.database.set('RightAnswer', dataView.readUnsignedInt());
    this.database.set('Answerone', dataView.readUTF());
    this.database.set('Feedbackone', dataView.readUTF());
    this.database.set('Answertwo', dataView.readUTF());
    this.database.set('Feedbacktwo', dataView.readUTF());
    this.database.set('Answerthree', dataView.readUTF());
    this.database.set('Feedbackthree', dataView.readUTF());

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
