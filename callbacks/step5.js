module.exports = function getHTML (options, callback) {

var https = require('https');

    var call = function(response) {
      console.log('\n');

      response.on('data', function(chunk) {
        var data = chunk;
        callback(data.toString());
      })
    }

    https.request(options, call).end();
}

