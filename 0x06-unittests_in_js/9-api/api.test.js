const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  let server;

  before(function (done) {
    // Start the server before tests run
    server = require('./api');
    server.on('listening', () => {
      done();
    });
  });

  after(function (done) {
    // Close the server after tests complete
    server.close(function () {
      done();
    });
  });

  it('Correct status code for /', function (done) {
    request.get('http://localhost:7865/', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result for /', function (done) {
    request.get('http://localhost:7865/', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', function () {
    it('Correct status code when :id is a number', function (done) {
      request.get('http://localhost:7865/cart/12', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct result when :id is a number', function (done) {
      request.get('http://localhost:7865/cart/12', function (error, response, body) {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('Correct status code when :id is NOT a number (404)', function (done) {
      request.get('http://localhost:7865/cart/hello', function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('Correct result when :id is NOT a number (404 message)', function (done) {
      request.get('http://localhost:7865/cart/hello', function (error, response, body) {
        expect(body).to.include('Cannot GET /cart/hello');
        done();
      });
    });
  });
});
