let hamming = require('../index.js');
let assert = require('chai').assert;

describe('Checksum code testing', function() {
it('encode correctly with proper input', function() {
    let dataToEncode = [0,0,0,0];
    let expectedEncoded = [0,0,0,0,0];
    let encoded = checksum.encode(dataToEncode);
    assert.equal(encoded.length == 5, true);
    for(let i = 0; i < 5; i++) {
      assert.equal(encoded[i], expectedEncoded[i]);
    }

    dataToEncode = [1,0,0,0];
    expectedEncoded = [1,1,1,0,0,0,0];
    encoded = checksum.encode(dataToEncode);
    assert.equal(encoded.length == 5, true);
    for(let i = 0; i < 5; i++) {
      assert.equal(encoded[i], expectedEncoded[i]);
    }

    dataToEncode = [0,1,0,0];
    expectedEncoded = [1,0,0,1,1,0,0];
    encoded = checksum.encode(dataToEncode);
    assert.equal(encoded.length == 7, true);
    for(let i = 0; i < 7; i++) {
      assert.equal(encoded[i], expectedEncoded[i]);
    }

    dataToEncode = [0,0,0,1];
    expectedEncoded = [1,1,0,1,0,0,1];
    encoded = checksum.encode(dataToEncode);
    assert.equal(encoded.length == 7, true);
    for(let i = 0; i < 7; i++) {
      assert.equal(encoded[i], expectedEncoded[i]);
    }
  })

}