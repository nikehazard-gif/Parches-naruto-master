import pako from 'pako';

export function decompressData(buffer) {
  return pako.inflate(buffer);
}

class DataReader {
  constructor(buffer) {
    const decompressedBuffer = decompressData(buffer);

    this.dataView = new DataView(decompressedBuffer.buffer);

    this.offset = 0;
  }

  readUnsignedInt() {
    const data = this.dataView.getUint32(this.offset, true);

    this.offset += 4;

    return data;
  }

  readInt() {
    const data = this.dataView.getInt32(this.offset, true);

    this.offset += 4;

    return data;
  }

  readFloat(traceNan) {
    const data = this.dataView.getFloat32(this.offset, true);

    this.offset += 4;

    if (traceNan && Number.isNaN(data)) {
      console.log('NaN detected');
    }

    return !Number.isNaN(data) ? data : null;
  }

  readBoolean() {
    const data = this.dataView.getUint8(this.offset);

    this.offset += 1;

    return data !== 0;
  }

  readUTF() {
    const length = this.readUnsignedInt();

    const utf8Bytes = new Uint8Array(this.dataView.buffer, this.offset, length);

    this.offset += length;

    const decoder = new TextDecoder('utf-8');

    return decoder.decode(utf8Bytes);
  }
}

export async function loadBinaryData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch binary data: ${response.statusText}`);
    }
    return new DataReader(new Uint8Array(await response.arrayBuffer())); // Get raw binary data q
  } catch (error) {
    console.error(error);
    throw error;
  }
}
