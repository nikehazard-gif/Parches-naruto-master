import db from '../db.js';
import pkg from 'lodash';

export class LostsacredGenerate {
  constructor(dataView) {
    this.db = db.data['TLostsacredGenerate'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ArtifactId', dataView.readUnsignedInt());
    this.database.set('NeedTreasurelevel', dataView.readUnsignedInt());
    this.database.set('CostlostItemCount', dataView.readUnsignedInt());

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
