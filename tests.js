import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index.js';

chai.use(chaiHttp);
chai.use(chaiHttp);

describe('Just Sample Test to see if it works', () => {
  it('should return a response with status code 200', (done) => {
    chai.request(app)
      .get('/home')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });
});
