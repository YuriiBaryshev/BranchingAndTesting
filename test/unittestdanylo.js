const assert = require('assert');
const HammingCode = require('../classes/hamming');  

describe("parityCheckDecode function", function () {
    it("should return correct data for valid encoded input", function () {
      const input = [1, 0, 1, 1]; // довільні 4 біти
      const encoded = HammingCode.encode(input);
      const decoded = HammingCode.parityCheckDecode(encoded);
      assert.deepStrictEqual(decoded, input);
    });
  
    it("should return null if an error is introduced", function () {
      const input = [1, 0, 0, 1];
      const encoded = HammingCode.encode(input);
      const corrupted = HammingCode.injectError(encoded, 3); // інжектуємо помилку
      const decoded = HammingCode.parityCheckDecode(corrupted);
      assert.strictEqual(decoded, null);
    });
  });

describe('injectMultipleErrors function', function() {

    it('should inject multiple errors correctly', function() {
      let data = [1, 1, 1, 1, 0, 0, 1];
      let positions = [1, 5]; 
      let result = HammingCode.injectMultipleErrors(data, positions);
  
      
      assert.deepEqual(result, [0, 1, 1, 1, 1, 0, 1]);
    });
  
    it('should inject errors at non-consecutive positions', function() {
      let data = [1, 0, 0, 1, 1, 0, 1];
      let positions = [3, 6]; 
      let result = HammingCode.injectMultipleErrors(data, positions);
  
      assert.deepEqual(result, [1, 0, 1, 1, 1, 1, 1]);
    });
  
    it('should inject errors at consecutive positions', function() {
      let data = [0, 1, 1, 0, 1, 1, 0];
      let positions = [2, 3]; 
      let result = HammingCode.injectMultipleErrors(data, positions);
  
      assert.deepEqual(result, [0, 0, 0, 0, 1, 1, 0]);
    });
  });
    