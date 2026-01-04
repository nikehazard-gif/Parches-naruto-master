import db from '../db.js';
import pkg from 'lodash';

export class FettersTeam {
  constructor(dataView) {
    this.db = db.data['TFettersTeam'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('TeamId', dataView.readUTF());
    this.database.set('TeamName', dataView.readUTF());
    this.database.set('FormationOne', dataView.readUnsignedInt());
    this.database.set('TeamOne', dataView.readUTF());
    this.database.set('DescriptionOne', dataView.readUTF());
    this.database.set('FormationDouble', dataView.readUnsignedInt());
    this.database.set('TeamDouble', dataView.readUTF());
    this.database.set('DescriptionDouble', dataView.readUTF());
    this.database.set('FormationTriple', dataView.readUnsignedInt());
    this.database.set('TeamTriple', dataView.readUTF());
    this.database.set('DescriptionTriple', dataView.readUTF());
    this.database.set('FormationUltra', dataView.readUnsignedInt());
    this.database.set('TeamUltra', dataView.readUTF());
    this.database.set('DescriptionUltra', dataView.readUTF());
    this.database.set('FormationPenta', dataView.readUnsignedInt());
    this.database.set('TeamPenta', dataView.readUTF());
    this.database.set('DescriptionPenta', dataView.readUTF());

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
