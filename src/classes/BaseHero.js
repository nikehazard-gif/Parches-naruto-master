import db from '../db.js';
import pkg from 'lodash';

export class BaseHero {
  constructor(dataView) {
    this.db = db.data['TBaseHero'];
    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('TransId', dataView.readUnsignedInt());
    this.database.set('TransState', dataView.readUnsignedInt());
    this.database.set('IsMain', dataView.readBoolean());
    this.database.set('OrigionId', dataView.readUnsignedInt());
    this.database.set('SkPreview', dataView.readUnsignedInt());
    this.database.set('Desc', dataView.readUTF());
    this.database.set('Name', dataView.readUTF());
    this.database.set('Assess', dataView.readUTF());
    this.database.set('Sex', dataView.readUnsignedInt());
    this.database.set('Level', dataView.readUnsignedInt());
    this.database.set('NeedLevel', dataView.readUnsignedInt());
    this.database.set('Profession', dataView.readUnsignedInt());
    this.database.set('Source', dataView.readUnsignedInt());
    this.database.set('Quality', dataView.readUnsignedInt());
    this.database.set('Awakequality', dataView.readUnsignedInt());
    this.database.set('Power', dataView.readUnsignedInt());
    this.database.set('Agile', dataView.readUnsignedInt());
    this.database.set('Intelligence', dataView.readUnsignedInt());
    this.database.set('Life', dataView.readUnsignedInt());
    this.database.set('Speed', dataView.readUnsignedInt());
    this.database.set('PowerGrow', dataView.readFloat());
    this.database.set('AgileGrow', dataView.readFloat());
    this.database.set('IntelligenceGrow', dataView.readFloat());
    this.database.set('LifeGrow', dataView.readFloat());
    this.database.set('SpeedGrow', dataView.readFloat());
    this.database.set('NearAttack', dataView.readUnsignedInt());
    this.database.set('NearDefense', dataView.readUnsignedInt());
    this.database.set('FarAttack', dataView.readUnsignedInt());
    this.database.set('FarDefense', dataView.readUnsignedInt());
    this.database.set('StrategyAttack', dataView.readUnsignedInt());
    this.database.set('StrategyDefense', dataView.readUnsignedInt());
    this.database.set('HitRate', dataView.readFloat());
    this.database.set('DodgeRate', dataView.readFloat());
    this.database.set('CritRate', dataView.readFloat());
    this.database.set('BlockRate', dataView.readFloat());
    this.database.set('PunchRate', dataView.readFloat());
    this.database.set('HelpRate', dataView.readFloat());
    this.database.set('HurtRate', dataView.readFloat());
    this.database.set('AvoidHurtRate', dataView.readFloat());
    this.database.set('WreckRate', dataView.readFloat());
    this.database.set('AntiknockRate', dataView.readFloat());
    this.database.set('AttachRate', dataView.readFloat());
    this.database.set('DeFenceRate', dataView.readFloat());
    this.database.set('RecoverRate', dataView.readFloat());
    this.database.set('Active', dataView.readUnsignedInt());
    this.database.set('AttackEffect', dataView.readUTF());
    this.database.set('NormalAttack', dataView.readUnsignedInt());
    this.database.set('Talent', dataView.readUnsignedInt());
    this.database.set('Weakness', dataView.readUnsignedInt());
    this.database.set('HeadStyle', dataView.readUTF());
    this.database.set('Country', dataView.readUnsignedInt());
    this.database.set('HeroSoul', dataView.readUTF());
    this.database.set('Soundid', dataView.readUnsignedInt());
    this.database.set('Skillsound', dataView.readUnsignedInt());
    this.database.set('IsReversion', dataView.readUnsignedInt());
    this.database.set('OffsetY', dataView.readUnsignedInt());
    this.database.set('Maxpoint', dataView.readUnsignedInt());
    this.database.set('Initialpoint', dataView.readUnsignedInt());

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
