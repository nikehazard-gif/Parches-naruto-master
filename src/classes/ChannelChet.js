import db from '../db.js';
import pkg from 'lodash';

export class ChannelChet {
  constructor(dataView) {
    this.db = db.data['TChannelChet'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('AllowSend', dataView.readUnsignedInt());
    this.database.set('HasCooldown', dataView.readUnsignedInt());
    this.database.set('CoolTime', dataView.readUnsignedInt());
    this.database.set('TargetType', dataView.readUnsignedInt());
    this.database.set('AllowShow', dataView.readBoolean());
    this.database.set('TextColor', dataView.readUTF());
    this.database.set('IsChannel', dataView.readBoolean());
    this.database.set('CanUseId', dataView.readUTF());
    this.database.set('NeedAuth', dataView.readBoolean());
    this.database.set('LevelAnalog', dataView.readUnsignedInt());

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
