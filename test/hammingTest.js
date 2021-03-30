let hamming = require('../index.js');
let assert = require('chai').assert;

describe('Hamming code testing', function() {
  it('posses encode() method', function() {
    assert.equal(hamming.encode != undefined, true);
  })

  it('posses decode() method', function() {
    assert.equal(hamming.decode != undefined, true);
  })

  it('does not posses encrypt() method', function() {
    assert.equal(hamming.encrypt == undefined, true);
  })

  it('encode correctly', function() {
    let dataToEncode = [0,0,0,0];
    let expectedEncoded = [0,0,0,0,0,0,0];
    let encoded = hamming.encode(dataToEncode);
    assert.equal(encoded.length == 7, true);
    for(let i = 0; i < 7; i++) {
      assert.equal(encoded[i], expectedEncoded[i]);
    }

    dataToEncode = [1,0,0,0];
    expectedEncoded = [1,1,1,0,0,0,0];
    encoded = hamming.encode(dataToEncode);
    assert.equal(encoded.length == 7, true);
    for(let i = 0; i < 7; i++) {
      assert.equal(encoded[i], expectedEncoded[i]);
    }

    dataToEncode = [0,1,0,0];
    expectedEncoded = [1,0,0,1,1,0,0];
    encoded = hamming.encode(dataToEncode);
    assert.equal(encoded.length == 7, true);
    for(let i = 0; i < 7; i++) {
      assert.equal(encoded[i], expectedEncoded[i]);
    }

    dataToEncode = [0,0,0,1];
    expectedEncoded = [1,1,0,1,0,0,1];
    encoded = hamming.encode(dataToEncode);
    assert.equal(encoded.length == 7, true);
    for(let i = 0; i < 7; i++) {
      assert.equal(encoded[i], expectedEncoded[i]);
    }
  })
})
