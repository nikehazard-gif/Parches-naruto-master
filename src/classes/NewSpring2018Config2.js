import db from '../db.js';
import pkg from 'lodash';

export class NewSpring2018Config2 {
  constructor(dataView) {
    this.db = db.data['TNewSpring2018Config2'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('id', dataView.readUnsignedInt());
    this.database.set('bigType', dataView.readUnsignedInt());
    this.database.set('startTime', dataView.readUTF());
    this.database.set('endTime', dataView.readUTF());
    this.database.set('name', dataView.readUTF());
    this.database.set('houduan', dataView.readUTF());
    this.database.set('qianduan', dataView.readUTF());
    this.database.set('orgPrice', dataView.readUTF());
    this.database.set('dadao', dataView.readUTF());
    this.database.set('jifeng', dataView.readUTF());
    this.database.set('photo', dataView.readUTF());
    this.database.set('chongzhi', dataView.readUTF());

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
