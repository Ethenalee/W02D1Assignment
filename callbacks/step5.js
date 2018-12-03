module.exports = function getHTML (options, callback) {

var https = require('https');

    var call = function(response) {
      response.setEncoding('utf8');


      var dataa = "";

      response.on('data', function(chunk) {
        dataa += chunk;
      });

      response.on('end', function() {
        callback(dataa);
      });
    }

    https.request(options, call).end();
}

