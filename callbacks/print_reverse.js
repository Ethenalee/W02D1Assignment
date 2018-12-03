var getHTML = require('./step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  var data = html.split("").reverse().join("");
  console.log(data);
}

getHTML(requestOptions, printReverse);
