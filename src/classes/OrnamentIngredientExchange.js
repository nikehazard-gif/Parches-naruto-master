import db from '../db.js';
import pkg from 'lodash';

export class OrnamentIngredientExchange {
  constructor(dataView) {
    this.db = db.data['TOrnamentIngredientExchange'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Expend', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('GotIngredientId', dataView.readUnsignedInt());
    this.database.set('IngredientNum', dataView.readUnsignedInt());

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
