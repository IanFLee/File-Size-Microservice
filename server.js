function cl(x){console.log(x)}
var express = require('express');
var app = express();

app.get("/", function (request, response) {
  //response.sendFile(__dirname + '/views/index.html');
  response.send("<form action='/upload'><input name='bob' value='fred' /><button type='button'>upload file</button><button type='submit'>submit</button></form>");
});

app.get("/upload", function (request, response) {
  cl(request.params);
  response.send(request.params.bob);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
