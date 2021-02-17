var request = require('supertest');
app = require('../Tema_6/ejercicio_4.js');

describe("GET /nombre", function() {
  it('Debería devolver formato JSON', function(done){
    request(app).get('/nombre').expect('Content-type', /json/).expect(200, done);
  });
});

describe("GET /edad", function() {
  it('Debería devolver formato html', function(done){
    request(app).get('/edad').expect('Content-type', /html/).expect(200, done);
  });
});
