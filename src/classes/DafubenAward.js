import db from '../db.js';

export class DafubenAward {
  constructor(dataView) {
    if (!db.data['TDafubenAward']) {
      db.data['TDafubenAward'] = [];
    }
    this.db = db.data['TDafubenAward'];

    // Read the primary ID
    this.identifier = dataView.readUnsignedInt();
    
    const dataObj = {};

    // Sequential reading following ReadDataByStream precisely
    dataObj.Awardid = dataView.readUnsignedInt();
    dataObj.Chaptername = dataView.readUTF();
    
    // The Award string contains JSON data (type, code, amount)
    const awardRaw = dataView.readUTF();
    dataObj.Award = awardRaw;
    try {
      // Replicates the FAwardArr logic
      dataObj.AwardArr = JSON.parse(awardRaw);
    } catch (e) {
      dataObj.AwardArr = [];
    }

    dataObj.Needstar = dataView.readUnsignedInt();
    dataObj.Stardec = dataView.readUTF();
    dataObj.Dec = dataView.readUTF();
    dataObj.Need = dataView.readUnsignedInt();
    
    // CRITICAL: Added missing 4-byte Level integer
    dataObj.Level = dataView.readUnsignedInt();

    this.db.push({
      ID: this.identifier,
      data: dataObj,
    });
  }
}