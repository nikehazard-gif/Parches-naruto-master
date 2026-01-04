import db from '../db.js';
import pkg from 'lodash';

export class LostsacredUpgrade {
  constructor(dataView) {
    this.db = db.data['TLostsacredUpgrade'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Itemid', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('CostItemCount', dataView.readUnsignedInt());
    this.database.set('CostlostItemCount', dataView.readUnsignedInt());
    this.database.set('AddValue', dataView.readUnsignedInt());
    this.database.set('AddextraValue', dataView.readUTF());
    this.database.set('AddextraValueclient', dataView.readUTF());
    this.database.set('Costsheart', dataView.readUTF());

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
