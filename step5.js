module.exports = function getHTML (options, callback) {

var https = require('https');

  https.get(options, function(response) {
      response.setEncoding('utf8');


      var dataa = "";

      response.on('data', function(chunk) {
        dataa += chunk;
      });

      response.on('end', function() {
        callback(dataa);
      });
  });
}

