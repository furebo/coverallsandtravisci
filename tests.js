import chai from 'chai';
import chaiHttp from 'chai-http';
//import app from './src/index.js';
import operations from './aboutnumbers.js';
chai.use(chaiHttp);


describe('Just Sample Test to see if it works', () => {
  it('should return seven', (done) => {
    chai.expect(operations.sum(7,5)).to.be.equal(12)
    done()
  });
  it('should return thirty five', (done) => {
    chai.expect(operations.multiply(7,5)).to.be.equal(35)
    done()
  });
  it('should return four', (done) => {
    chai.expect(operations.devide(20,5)).to.be.equal(4)
    done()
  });
});
