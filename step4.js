function getHTML (options, callback) {

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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML (requestOptions, printHTML);