const chai = require('chai');
const operations = require('./aboutnumbers');
const expect = chai.expect;


describe('Just Sample Test to see if it works', () => {
  it('exists', function () {
    expect(operations.sum).to.be.a('function');

  })
  it('should return seven', () => {
      expect(operations.sum(7,5)).to.be.equal(12)
    
  });
  it('should return thirty five', () => {
    expect(operations.multiply(7,5)).to.be.equal(35)
  });
  it('should return four', () => {
    expect(operations.devide(20,5)).to.be.equal(4)
  });
});
