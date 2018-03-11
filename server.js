var express = require('express');
var app = express();

app.get("/", function (request, response) {
  //response.sendFile(__dirname + '/views/index.html');
  response.send("<form><button type='button'>upload file</button><button type='submit'>submit</button></form>");
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
