import db from '../db.js';
import pkg from 'lodash';

export class Article {
  constructor(dataView) {
    this.db = db.data['TArticle'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('MajorType', dataView.readUnsignedInt());
    this.database.set('MinorType', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('CardType', dataView.readUnsignedInt());
    this.database.set('Sort', dataView.readUnsignedInt());
    this.database.set('OverlayNumber', dataView.readUnsignedInt());
    this.database.set('BindMode', dataView.readUnsignedInt());
    this.database.set('Obtain', dataView.readUnsignedInt());
    this.database.set('FunctionDesc', dataView.readUTF());
    this.database.set('Picture', dataView.readUnsignedInt());
    this.database.set('Expands', dataView.readUTF());
    this.database.set('CostPrice', dataView.readUnsignedInt());
    this.database.set('SellPrice', dataView.readUnsignedInt());
    this.database.set('ItemFunction', dataView.readUnsignedInt());
    this.database.set('FunctionValue', dataView.readUnsignedInt());
    this.database.set('IsExchange', dataView.readUnsignedInt());
    this.database.set('GoldNumber', dataView.readUnsignedInt());

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
