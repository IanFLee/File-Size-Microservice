function cl(x){console.log(x)}
var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer({ dest: 'uploads/' });

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  //response.send("<form action='/upload' method='post'><button type='button'>upload file</button><button type='submit' name='bob' value='fred'>submit</button></form>");
});


app.post('/upload', upload.single('file'), function (req, res, next) {
  var size = req.file.size;
  res.send({size:size});
});


app.get("/upload", function (request, response) {
  cl(request.query.fred);
  response.send(request.query.fred);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
