import db from '../db.js';
import pkg from 'lodash';

export class Task {
  constructor(dataView) {
    this.db = db.data['TTask'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('EventType', dataView.readUnsignedInt());
    this.database.set('Point', dataView.readUnsignedInt());
    this.database.set('Rewards', dataView.readUTF());
    this.database.set('Cancel', dataView.readUnsignedInt());
    this.database.set('Name', dataView.readUTF());
    this.database.set('PreTaskId', dataView.readUnsignedInt());
    this.database.set('Accept', dataView.readUnsignedInt());
    this.database.set('TransLevel', dataView.readUnsignedInt());
    this.database.set('AutoAccept', dataView.readUnsignedInt());
    this.database.set('Instant', dataView.readUnsignedInt());
    this.database.set('Complete', dataView.readUTF());
    this.database.set('Content', dataView.readUTF());
    this.database.set('Plot', dataView.readUTF());
    this.database.set('Description', dataView.readUTF());
    this.database.set('GuideBefor', dataView.readUTF());
    this.database.set('Guide', dataView.readUTF());
    this.database.set('GuideEnd', dataView.readUTF());
    this.database.set('TalkBefor', dataView.readUTF());
    this.database.set('TalkEnd', dataView.readUTF());
    this.database.set('StartNpcId', dataView.readUnsignedInt());
    this.database.set('FinishNpcId', dataView.readUnsignedInt());

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
