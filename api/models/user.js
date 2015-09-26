'use strict';

module.exports = {
    attributes: {
        name: 'string',
        email: 'string'
    },

    poorlyWrittenClassMethod: function(id) {
        return id.attributeThatDoesntExist;
    }
};