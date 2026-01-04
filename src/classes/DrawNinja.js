import db from '../db.js';
import pkg from 'lodash';

export class DrawNinja {
  constructor(dataView) {
    this.db = db.data['TDrawNinja'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Ninjaid', dataView.readUnsignedInt());
    this.database.set('Type', dataView.readUnsignedInt());
    this.database.set('Star1', dataView.readUTF());
    this.database.set('Star2', dataView.readUTF());
    this.database.set('Star3', dataView.readUTF());
    this.database.set('Star4', dataView.readUTF());
    this.database.set('Star5', dataView.readUTF());
    this.database.set('Assess', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());

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
