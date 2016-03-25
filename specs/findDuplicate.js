var expect = require('chai').expect;
var findDuplicate = require('../prompts/duplicateSpace/solution.js');

describe('findDuplicate', function() {
  
  it('should return the correct answer', function(done) {
    expect(findDuplicate([1,2,3,1])).to.equal(1)
  });
});
