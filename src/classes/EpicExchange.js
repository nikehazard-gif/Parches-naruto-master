import db from '../db.js';
import pkg from 'lodash';

export class EpicExchange {
  constructor(dataView) {
    this.db = db.data['TEpicExchange'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('PieceName', dataView.readUTF());
    this.database.set('PieceId', dataView.readUnsignedInt());
    this.database.set('EpicLevel', dataView.readUnsignedInt());
    this.database.set('CostType', dataView.readUnsignedInt());
    this.database.set('ExchangeCost', dataView.readUnsignedInt());

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
