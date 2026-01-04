import db from '../db.js';
import pkg from 'lodash';

export class Post {
  constructor(dataView) {
    this.db = db.data['TPost'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Channel', dataView.readUnsignedInt());
    this.database.set('Show', dataView.readUTF());
    this.database.set('TemplateTaskFront', dataView.readUTF());
    this.database.set('TextColor', dataView.readUTF());
    this.database.set('TextSize', dataView.readUnsignedInt());
    this.database.set('Event', dataView.readUTF());
    this.database.set('Delay', dataView.readUTF());

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
