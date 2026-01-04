import db from '../db.js';

export class Dafuben {
  constructor(dataView) {
    // Initialize category if not exists
    if (!db.data['TDafuben']) {
      db.data['TDafuben'] = [];
    }
    this.db = db.data['TDafuben'];

    // Every record starts with the 4-byte Identifier
    this.identifier = dataView.readUnsignedInt();
    
    const dataObj = {};

    // Sequential reads based on ReadDataByStream
    dataObj.Chapterid = dataView.readUnsignedInt();
    dataObj.Name = dataView.readUTF();
    
    // Condition often contains a JSON string in these files
    const conditionRaw = dataView.readUTF();
    dataObj.Condition = conditionRaw;
    try {
      // Replicates 'this.FConditionList = Json.decode(this.FCondition)'
      dataObj.ConditionList = JSON.parse(conditionRaw);
    } catch (e) {
      dataObj.ConditionList = [];
    }

    dataObj.Bp = dataView.readUnsignedInt();
    dataObj.Award = dataView.readUTF();
    dataObj.Iconzy = dataView.readUTF();
    dataObj.Uiid = dataView.readUnsignedInt();
    dataObj.Need = dataView.readUnsignedInt();
    
    // CRITICAL: Added missing Level field (4 bytes)
    dataObj.Level = dataView.readUnsignedInt();

    this.db.push({
      ID: this.identifier,
      data: dataObj,
    });
  }
}