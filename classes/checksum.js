class Checksum {

  // 4bits -> 5bits
  static encode(dataToEncode) {
    if(dataToEncode.length != 4) {
      throw Error("Checksum: encode input must have exactly 4 bits");
    }

    for(let i = 0; i < 4; i++) {
      if((dataToEncode[i] > 1)||(dataToEncode[i] == null)||(dataToEncode[i].toString() == 'undefined')) {
        throw Error("Checksum: encode input must consist of bits");
      }
    }

    let checksumEncoded = [1,1,1,1,1];

    let parity = 0
    for(let i = 0; i < 4; i++) {
        if(dataToEncode[i] == 1) {
            parity++;
     }
    }

    if(dataToEncode.length % 2 == 0) {
       checksumEncoded[0] = dataToEncode[0];
       checksumEncoded[1] = dataToEncode[1];
       checksumEncoded[2] = dataToEncode[2];
       checksumEncoded[3] = dataToEncode[3];
       checksumEncoded[4] = 0;
    } else {
         checksumEncoded[0] = dataToEncode[0];
         checksumEncoded[1] = dataToEncode[1];
         checksumEncoded[2] = dataToEncode[2];
         checksumEncoded[3] = dataToEncode[3];
         checksumEncoded[4] = 1;
    }

    return checksumEncoded;
  }
}

module.exports = Checksum;
