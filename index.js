'use strict';

module.exports = function(sails) {
    return {
        /**
         * Default config options
         */
        defaults: {
            __configKey__: {
                apiKey: null,
                enabled: true,
                options: {
                    releaseStage: process.env['NODE_ENV'] || 'development',
                    notifyReleaseStages: ['production']
                }
            }
        },

        /**
         * Initialize the hook. Ensure that the hook is enabled. Configure the bugsnag-node module. Attach
         * request handlers.
         *
         * @param {function} cb - callback to signal when we're finished initializing
         */
        initialize: function(cb) {
            var config = sails.config[this.configKey],
                self = this;

            // ensure the hook is enabled
            if (!config.enabled) {
                sails.log.verbose('bugsnag has been disabled');
                return cb();
            }

            // ensure we have an api key
            if (!config.apiKey) {
                return cb('No bugsnag api key was found. Ensure you include an `apiKey` attribute in the config for this hook.')
            }

            // initialize the module
            var bugsnag = require('bugsnag');
            bugsnag.register(config.apiKey, config.options);
            sails.bugsnag = bugsnag;


            sails.on('router:request:500', function(err, req) {
                console.log('heard ya', err);
                bugsnag.notify(err, {
                    req: req,
                    severity: 'error'
                });
            });

            cb();
        }
    };
};