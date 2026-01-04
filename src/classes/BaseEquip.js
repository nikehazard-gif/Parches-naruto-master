import db from '../db.js';
import pkg from 'lodash';

export class BaseEquip {
  constructor(dataView) {
    this.db = db.data['TBaseEquip'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('DressProfession', dataView.readUTF());
    this.database.set('MainType', dataView.readUnsignedInt());
    this.database.set('MainValue', dataView.readUnsignedInt());
    this.database.set('MainAdditionalType', dataView.readUnsignedInt());
    this.database.set('MaxAdditionalCount', dataView.readUnsignedInt());
    this.database.set('HoleCount', dataView.readUnsignedInt());
    this.database.set('SuitId', dataView.readUnsignedInt());
    this.database.set('SuitId1r', dataView.readUnsignedInt());
    this.database.set('SuitId2r', dataView.readUnsignedInt());
    this.database.set('SuitId3r', dataView.readUnsignedInt());
    this.database.set('SuitId4r', dataView.readUnsignedInt());
    this.database.set('SuitId5r', dataView.readUnsignedInt());
    this.database.set('SuitId6r', dataView.readUnsignedInt());
    this.database.set('SuitId7r', dataView.readUnsignedInt());
    this.database.set('SuitId8r', dataView.readUnsignedInt());
    this.database.set('SuitId9r', dataView.readUnsignedInt());
    this.database.set('EightsuitId', dataView.readUnsignedInt());
    this.database.set('EightsuitId1r', dataView.readUnsignedInt());
    this.database.set('EightsuitId2r', dataView.readUnsignedInt());
    this.database.set('SkillRevise', dataView.readUnsignedInt());
    this.database.set('EdgeColor', dataView.readBoolean());
    this.database.set('DigHoleNum', dataView.readUnsignedInt());
    this.database.set('EnchantCoefficient', dataView.readFloat());
    this.database.set('Display', dataView.readUnsignedInt());

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
