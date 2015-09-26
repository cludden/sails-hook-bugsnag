'use strict';

module.exports.bugsnag = {
    apiKey: process.env['SAILSHOOKBUGSNAG_APIKEY'],
    logger: function() {
        return sails.log;
    }
};