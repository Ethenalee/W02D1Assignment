function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require('https');

  var callback = function(response) {
    console.log('\n');

    response.on('data', function(chunk) {
      var data = chunk;
      console.log(data.toString());
    })
  }

  https.request(requestOptions, callback).end();

}
getAndPrintHTML();