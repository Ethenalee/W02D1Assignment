function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var https = require('https');

  var callback = function(response) {
    console.log('\n');

    response.on('data', function(chunk) {
      console.log(chunk.toString());
    })
  }

  https.request(requestOptions, callback).end();
}

getAndPrintHTMLChunks();

