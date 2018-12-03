function getAndPrintHTML (options) {

  var https = require('https');

  var callback = function(response) {
    console.log('\n');

    response.on('data', function(chunk) {
      var data = chunk;
      console.log(data.toString());
    })
  }

  https.request(options, callback).end();

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);