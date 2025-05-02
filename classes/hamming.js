//Hamming 4->7
class HammingCode {
  //dataToEncode [i1, i2, i3, i4]
  static encode(dataToEncode) {
    if(dataToEncode.length != 4) {
      throw Error("HammingCode: encode input must have exactly 4 bits");
    }

    for(let i = 0; i < 4; i++) {
      if((dataToEncode[i] > 1)||(dataToEncode[i] == null)||(dataToEncode[i].toString() == 'undefined')) {
        throw Error("HammingCode: encode input must consist of bits");
      }
    }

    let hammingEncoded = [1,1,1,1,1,1,1]; //p1 p2 i1 p3 i2 i3 i4
    /*
    1 = 001
    2 = 010
    3 = 011
    4 = 100
    5 = 101
    6 = 110
    7 = 111
    */
    hammingEncoded[2] = dataToEncode[0];
    hammingEncoded[4] = dataToEncode[1];
    hammingEncoded[5] = dataToEncode[2];
    hammingEncoded[6] = dataToEncode[3];

    hammingEncoded[0] = hammingEncoded[2] ^ hammingEncoded[4] ^ hammingEncoded[6];
    hammingEncoded[1] = hammingEncoded[2] ^ hammingEncoded[5] ^ hammingEncoded[6];
    hammingEncoded[3] = hammingEncoded[4] ^ hammingEncoded[5] ^ hammingEncoded[6];

    return hammingEncoded;
  }

  //dataToDecode [i1, i2, i3, i4, i5, i6, i7]
  static decode(dataToDecode) {
    if (dataToDecode.length !== 7) {
      throw Error("HammingCode: decode input must have exactly 7 bits");
    }

    // Calculation of error checking bits
    const p1 = dataToDecode[2] ^ dataToDecode[4] ^ dataToDecode[6];
    const p2 = dataToDecode[2] ^ dataToDecode[5] ^ dataToDecode[6];
    const p3 = dataToDecode[4] ^ dataToDecode[5] ^ dataToDecode[6];

    // Determining the position of the bit in error (if any)
    let errorPosition = 0;
    if (p1 !== dataToDecode[0]) {
      errorPosition += 1;
    }
    if (p2 !== dataToDecode[1]) {
      errorPosition += 2;
    }
    if (p3 !== dataToDecode[3]) {
      errorPosition += 4;
    }

    // Error correction (if found)
    if (errorPosition !== 0) {
      dataToDecode[errorPosition - 1] = 1 - dataToDecode[errorPosition - 1]; // Changing the value of a bit
    }

    return [dataToDecode[2], dataToDecode[4], dataToDecode[5], dataToDecode[6]];
  }
  // NEW: Вводить одиничну помилку в код
  static injectError(data, position) {
    if (!Array.isArray(data) || data.length !== 7) {
      throw Error("injectError: input must be 7-bit array");
    }
    if (position < 1 || position > 7) {
      throw Error("injectError: position must be in range 1-7");
    }

    const corrupted = [...data];
    corrupted[position - 1] = 1 - corrupted[position - 1];
    return corrupted;
  }

  // NEW: Перевіряє правильність коду (чи є помилка)
  static isValid(data) {
    if (!Array.isArray(data) || data.length !== 7) {
      throw Error("isValid: input must be 7-bit array");
    }

    const p1 = data[2] ^ data[4] ^ data[6];
    const p2 = data[2] ^ data[5] ^ data[6];
    const p3 = data[4] ^ data[5] ^ data[6];

    let errorPosition = 0;
    if (p1 !== data[0]) errorPosition += 1;
    if (p2 !== data[1]) errorPosition += 2;
    if (p3 !== data[3]) errorPosition += 4;

    return errorPosition === 0;
  }
  static generateRandomEncoded() {
    const randomBits = Array.from({ length: 4 }, () => Math.round(Math.random()));
    const encoded = HammingCode.encode(randomBits);
    return {
      original: randomBits,
      encoded: encoded
    };
  }
  
}

module.exports = HammingCode;