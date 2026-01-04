import db from '../db.js';
import pkg from 'lodash';

export class DigHoleCost {
  constructor(dataView) {
    this.db = db.data['TDigHoleCost'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('FEquipLv', dataView.readUnsignedInt());
    this.database.set('FEquipQuality', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole1', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole2', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole3', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole4', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole5', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole6', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole7', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole8', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole9', dataView.readUnsignedInt());
    this.database.set('FCostItem_Hole10', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole1', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole2', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole3', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole4', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole5', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole6', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole7', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole8', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole9', dataView.readUnsignedInt());
    this.database.set('FCostCoin_Hole10', dataView.readUnsignedInt());

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
