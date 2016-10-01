var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Overlook App Test Suite', function() {
    it('Basic heartbeat', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                should.equal(err, null)
                res.should.have.status(200)
                done()
            })
    })
});