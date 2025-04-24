const assert = require('assert');
const HammingCode = require('../classes/hamming');  

describe('Error handling for invalid input', function() {
    it('should throw error if input is not a 7-bit array', function() {
      const invalidData = [1, 1, 0, 1, 0, 1]; 
      assert.throws(() => HammingCode.isValid(invalidData), /input must be 7-bit array/);
    });
  
    it('should throw error if input is an array with more than 7 bits', function() {
      const invalidData = [1, 1, 0, 1, 0, 1, 1, 0]; 
      assert.throws(() => HammingCode.isValid(invalidData), /input must be 7-bit array/);
    });
  });

  describe('decode with single bit error', function() {
    it('should decode and correct single bit error', function() {
      const dataWithError = [0, 1, 1, 0, 1, 1, 1]; 
      const expected = [1, 0, 1, 1]; 
      const result = HammingCode.decode(dataWithError);
      assert.deepStrictEqual(result, expected);
    });
  });

 
  
  
  