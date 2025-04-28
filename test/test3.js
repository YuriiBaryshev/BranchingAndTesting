let hamming = require('../index.js').hamming;
const assert = require('chai').assert;

describe('Hamming Code Tests', function() {


  it('should throw error if encoding input is not a 4-bit array', function() {
    const invalidInput = [1, 1, 1]; 
    assert.throws(() => hamming.encode(invalidInput), Error);
  });

  it('should throw error if decoding input is not a 7-bit array', function() {
    const invalidInput = [1, 1, 1, 1, 1]; 
    assert.throws(() => hamming.decode(invalidInput), Error);
  });

  it('should throw error if data contains invalid data during encoding', function() {
    const invalidInput = 12345678; // Некоректний біт
    assert.throws(() => hamming.encode(invalidInput), Error);
  });

  it('should throw error if data contains invalid data during encoding', function() {
    const invalidInput = [1, "word", 1, 1]; // Некоректний біт
    assert.throws(() => hamming.encode(invalidInput), Error);
  });
  it('should throw error if data contains invalid data during decoding', function() {
    const invalidInput = [0, 1, 1, 0, 0, 1, None]; // Некоректний біт
    assert.throws(() => hamming.encode(invalidInput), Error);
  });

});
