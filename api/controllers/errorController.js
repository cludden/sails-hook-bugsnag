'use strict';

module.exports = {
    error: function(req, res) {
        console.log('/error has been called');
        throw new Error('Random unhandled error');
        console.log('/error has thrown an error');
        res.ok();
    }
};