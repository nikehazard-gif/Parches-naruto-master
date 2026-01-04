import { processBinaryData } from './processing.js';
import { loadBinaryData } from './loadBinaryData.js';
import _ from 'lodash';

async function main() {
  const url =
    'https://narutoeu.plaync100.net/public/2025122314/Resources/Bin/CombinServer/01000000.bin';

  try {
    const dataReader = await loadBinaryData(url);

    await processBinaryData(dataReader);
  } catch (error) {
    console.error('Error processing binary data:', error);
  }
}

main();
