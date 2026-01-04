import db from '../db.js';
import pkg from 'lodash';

export class VipConfig {
  constructor(dataView) {
    this.db = db.data['TVipConfig'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('ChargeCount', dataView.readUnsignedInt());
    this.database.set('HigherDrink', dataView.readUnsignedInt());
    this.database.set('DailyChicket', dataView.readUnsignedInt());
    this.database.set('FreeLook', dataView.readUnsignedInt());
    this.database.set('BlockTime', dataView.readUnsignedInt());
    this.database.set('StonePecent', dataView.readUnsignedInt());
    this.database.set('SkipBlock', dataView.readUnsignedInt());
    this.database.set('BagCount', dataView.readUnsignedInt());
    this.database.set('ActionLimit', dataView.readUnsignedInt());
    this.database.set('BuyActionLimit', dataView.readUnsignedInt());
    this.database.set('DailySingleReset', dataView.readUnsignedInt());
    this.database.set('DailyChaReset', dataView.readUnsignedInt());
    this.database.set('SkipChargeFight', dataView.readUnsignedInt());
    this.database.set('OneWine', dataView.readUnsignedInt());
    this.database.set('OneWinWine', dataView.readUnsignedInt());
    this.database.set('MoreChange', dataView.readUnsignedInt());
    this.database.set('DailyChangeNum', dataView.readUnsignedInt());
    this.database.set('ArenaSkip', dataView.readUnsignedInt());
    this.database.set('OneTimePet', dataView.readUnsignedInt());
    this.database.set('OneTimeTrain', dataView.readUnsignedInt());
    this.database.set('OneWater', dataView.readUnsignedInt());
    this.database.set('AutoBuyAct', dataView.readUnsignedInt());
    this.database.set('BossFightUp', dataView.readUnsignedInt());
    this.database.set('OneTimeWash', dataView.readUnsignedInt());
    this.database.set('MonsterOneTime', dataView.readUnsignedInt());
    this.database.set('StoneOneTime', dataView.readUnsignedInt());
    this.database.set('Digging', dataView.readUnsignedInt());
    this.database.set('ChangeBuyNum', dataView.readUnsignedInt());
    this.database.set('SevenHeroCount', dataView.readUnsignedInt());
    this.database.set('SevenHeroOneKey', dataView.readUnsignedInt());
    this.database.set('SkipSevenHeroFight', dataView.readUnsignedInt());
    this.database.set('AutoJoinActivity', dataView.readUnsignedInt());
    this.database.set('TeamerExpand', dataView.readUnsignedInt());
    this.database.set('AutoSingle', dataView.readUnsignedInt());
    this.database.set('TowerLife', dataView.readUnsignedInt());
    this.database.set('TowerDiscover', dataView.readUnsignedInt());
    this.database.set('DailyAward', dataView.readUTF());
    this.database.set('AutoSignOrgBattle', dataView.readUnsignedInt());
    this.database.set('BuyEquipMaterial', dataView.readUnsignedInt());
    this.database.set('BuyOrnamentMaterial', dataView.readUnsignedInt());
    this.database.set('AddNinjaHostel', dataView.readUnsignedInt());
    this.database.set(
      'AddFollowBloodBoundAutoSell',
      dataView.readUnsignedInt()
    );
    this.database.set(
      'AddFollowBloodBoundAutoSynthesis',
      dataView.readUnsignedInt()
    );
    this.database.set('AddEightInnerGatesTimes', dataView.readUnsignedInt());
    this.database.set('ContinuousChallenge', dataView.readUnsignedInt());
    this.database.set('DungeonsRefresh', dataView.readUnsignedInt());
    this.database.set('LostsacredRefresh', dataView.readUnsignedInt());
    this.database.set('WingBattleRefresh', dataView.readUnsignedInt());

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
