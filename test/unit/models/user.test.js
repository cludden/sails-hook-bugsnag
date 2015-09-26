var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

describe('[model] user', function() {

    describe('#poorlyWrittenClassMethod()', function() {
        before(function() {
            sinon.stub(sails.bugsnag, 'notify');
        });

        after(function() {
            sails.bugsnag.notify.restore();
        });

        it('should call bugsnag.notify when an unhandled error is thrown', function() {
            sails.models['user'].poorlyWrittenClassMethod(1);
            expect(sails.bugsnag.notify).to.have.been.called;
        });
    });
});