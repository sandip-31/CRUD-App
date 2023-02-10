const expect = require("chai").expect;
const request = require("request");
const sinon = require('sinon');
const {deleteUser} = require('../../src/controllers/userController');


  describe("CREATE USER", () => {
    it("User Already Exist returns 403", (done) => {
      request.post(
        `http://localhost:3000/users/create/`,
        {
          json: {
            name: "John1",
            email: "johndoee@recraftrelic.com",
          },
        },
        (_, response) => {
          expect(response.statusCode).to.equal(403);
          done();
        }
      );
    });
  });
  
describe("Get User by Id ", () => {
  it("User Already Exist returns 403", (done) => {
    request.get(
      `http://localhost:3000/users/get/63e546c06fc1`,
      (_, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      }
    );
  });

  it("User found", (done) => {
    request.get(
      `http://localhost:3000/users/get/63e5490a60a9b90da115eeea`,
      (_, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});

describe("Get All User", () => {
  it("all user retrived", (done) => {
    request.get(
      `http://localhost:3000/users/get`,
      (_, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
});



