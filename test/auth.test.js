const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');
const mongoose = require('mongoose');

describe('Auth API', function() {
  before(function(done) {
    // connect to test DB if provided
    if (process.env.MONGODB_URI) {
      mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => done())
        .catch(done);
    } else done();
  });

  it('returns 400 for incomplete register', function(done) {
    request(app)
      .post('/api/auth/register')
      .send({ name: 'A' })
      .expect(400, done);
  });

  it('returns 400 for invalid login', function(done) {
    request(app)
      .post('/api/auth/login')
      .send({ email: 'no@one', password: 'x' })
      .expect(400, done);
  });
});
