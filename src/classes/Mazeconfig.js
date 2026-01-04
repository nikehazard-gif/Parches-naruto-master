import db from '../db.js';
import pkg from 'lodash';

export class Mazeconfig {
  constructor(dataView) {
    this.db = db.data['TMazeconfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('EventName', dataView.readUTF());
    this.database.set('EventType', dataView.readUnsignedInt());
    this.database.set('IsChange', dataView.readUnsignedInt());
    this.database.set('IsSkip', dataView.readUnsignedInt());
    this.database.set('FightNpc', dataView.readUnsignedInt());
    this.database.set('AddAction', dataView.readInt());
    this.database.set('EventDescribe', dataView.readUTF());
    this.database.set('Icon', dataView.readInt());
    this.database.set('WinRate', dataView.readInt());

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
