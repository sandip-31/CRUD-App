const expect = require('chai').expect;
import request from 'request';


describe('User API', () => {
    describe('CREATE USER', () => {

      it('Create user SUCCESS', done => {
        request.post(`http://localhost:3000/users/create/`, {
          json: {
            name: "John",
            email: "johndoe@recraftrelic.com",
          }
        }, (_, response) => {
          expect(response.statusCode).to.equal(200)
          done()
        })
      })
    })
  })