import db from '../db.js';
import pkg from 'lodash';

export class NewGuide {
  constructor(dataView) {
    this.db = db.data['TNewGuide'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    dataView.readInt();
    this.database.set('GuideMessage', dataView.readUTF());
    this.database.set('IfKeyNode', dataView.readBoolean());
    this.database.set('SendIndex', dataView.readUnsignedInt());
    this.database.set('TriggerIndex', dataView.readInt());
    this.database.set('CompleteIndex', dataView.readInt());
    this.database.set('AutoTrigger', dataView.readBoolean());
    this.database.set('ArrowX', dataView.readInt());
    this.database.set('ArrowY', dataView.readInt());
    this.database.set('NextTaskID', dataView.readUnsignedInt());
    this.database.set('RelationLayer', dataView.readInt());
    this.database.set('RelationModule', dataView.readInt());
    this.database.set('TelesportCode', dataView.readInt());
    this.database.set('TelesportTargetID', dataView.readInt());
    this.database.set('SpecialHandleID', dataView.readInt());

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
