import db from '../db.js';
import pkg from 'lodash';

export class ItemMall {
  constructor(dataView) {
    this.db = db.data['TItemMall'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Itemid', dataView.readUTF());
    this.database.set('Needid', dataView.readUTF());
    this.database.set('Tpye', dataView.readUnsignedInt());
    this.database.set('Heroid', dataView.readUnsignedInt());
    this.database.set('Daybuy', dataView.readUnsignedInt());
    this.database.set('Maxbuy', dataView.readUnsignedInt());

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
