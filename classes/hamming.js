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

  static decode(dataToDecode) {
   if(dataToDecode.length != 7) {
      throw Error("HammingCode: decode input must have exactly 7 bits");
    }

    for(let i = 0; i < 7; i++) {
      if((dataToDecode[i] > 1)||(dataToDecode[i] == null)||(dataToDecode[i].toString() == 'undefined')) {
        throw Error("HammingCode: decode input must consist of bits");
      }
    }

    let hammingDecoded = [1,1,1,1];

    hammingDecoded[0] = dataToDecode[2];
    hammingDecoded[1] = dataToDecode[4];
    hammingDecoded[2] = dataToDecode[5];
    hammingDecoded[3] = dataToDecode[6];

    return hammingDecoded;
  }
}

module.exports = HammingCode;
