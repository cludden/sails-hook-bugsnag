# sails-hook-bugsnag
a `bugsnag` hook for `sails.js` apps (`v0.11`)

## Install
`npm install --save sails-hook-bugsnag`

```javascript
// config/bugsnag.js

module.exports.bugsnag = {
    apiKey: process.env['BUGSNAG_APIKEY'], // required
    enabled: true // default
    options: {
        // pass configuration options to bugsnag
        // see https://github.com/bugsnag/bugsnag-node for more examples
    }
};
```

## Purpose
Capture uncaught errors and stack traces and log them to bugsnag. Provide access to the [bugsnag-node](https://github.com/bugsnag/bugsnag-node) at `sails.bugsnag`.

## Testing
`npm test`

## To Do
- [ ] write more tests

## Contributing
1. [Fork it](https://github.com/cludden/sails-hook-bugsnag/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Licesnse
Copyright (c) 2015 Chris Ludden  
Licensed under the [MIT license](LICENSE.md)