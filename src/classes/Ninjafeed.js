import db from '../db.js';
import pkg from 'lodash';

export class Ninjafeed {
  constructor(dataView) {
    this.db = db.data['TNinjafeed'];

    this.identifier = dataView.readUnsignedInt();
    this.database = new Map();

    this.database.set('Name', dataView.readUTF());
    this.database.set('BigType', dataView.readUnsignedInt());
    this.database.set('SmallType', dataView.readUnsignedInt());
    this.database.set('Desc1', dataView.readUTF());
    this.database.set('ActAward1', dataView.readUTF());
    this.database.set('ClientAward1', dataView.readUTF());
    this.database.set('DayTime', dataView.readUTF());
    this.database.set('IsOn', dataView.readUnsignedInt());
    this.database.set('InviteNum', dataView.readUnsignedInt());
    this.database.set('NumAcun', dataView.readUnsignedInt());

    this.compare();
  }

  /*  constructor(dataView) {
    this.db = db.data['TNinjafeed'];

    // Leemos el ID
    this.identifier = dataView.readUnsignedInt();
    console.log(`[Ninjafeed ID: ${this.identifier}] Iniciando lectura...`);

    this.database = new Map();

    // 1. Name
    const name = dataView.readUTF();
    console.log(`   - Name: ${name}`);
    this.database.set('Name', name);

    // 2. BigType
    const bigType = dataView.readUnsignedInt();
    console.log(`   - BigType: ${bigType}`);
    this.database.set('BigType', bigType);

    // 3. SmallType
    const smallType = dataView.readUnsignedInt();
    console.log(`   - SmallType: ${smallType}`);
    this.database.set('SmallType', smallType);

    // 4. Desc1
    const desc1 = dataView.readUTF();
    console.log(`   - Desc1: (Longitud: ${desc1.length})`); // No imprimimos todo por si es largo
    this.database.set('Desc1', desc1);

    // 5. ActAward1
    const actAward = dataView.readUTF();
    console.log(`   - ActAward1: ${actAward}`);
    this.database.set('ActAward1', actAward);

    // 6. ClientAward1
    const clientAward = dataView.readUTF();
    console.log(`   - ClientAward1: ${clientAward}`);
    this.database.set('ClientAward1', clientAward);

    // 7. DayTime
    const dayTime = dataView.readUTF();
    console.log(`   - DayTime: ${dayTime}`);
    this.database.set('DayTime', dayTime);

    // --- PUNTO CRÍTICO ---
    // Aquí es donde sospecho que falla.
    // IsOn suele ser un Boolean (1 byte) pero el código lee Int (4 bytes).
    const isOn = dataView.readUnsignedInt(); 
    console.log(`   - IsOn: ${isOn} (¿Es un número 0 o 1, o un número gigante?)`);
    this.database.set('IsOn', isOn);

    const inviteNum = dataView.readUnsignedInt();
    console.log(`   - InviteNum: ${inviteNum}`);
    this.database.set('InviteNum', inviteNum);

    const numAcun = dataView.readUnsignedInt();
    console.log(`   - NumAcun: ${numAcun}`);
    this.database.set('NumAcun', numAcun);

    const extraData = dataView.readUTF();
    console.log(`   - extraData: ${extraData}`);
    this.database.set('ExtraData', extraData);

    console.log(`[Ninjafeed ID: ${this.identifier}] Lectura finalizada correctamente.`);
    this.compare();
  }*/

  compare() {
    const data = Object.fromEntries(this.database);

    this.db.push({
      ID: this.identifier,
      data,
    });
  }
}
