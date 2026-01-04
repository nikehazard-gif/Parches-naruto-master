import pako from 'pako';

export function readUnsignedInt(dataView, offset) {
  return dataView.getUint32(offset, true);
}

export function decompressData(buffer) {
  return pako.inflate(buffer);
}
