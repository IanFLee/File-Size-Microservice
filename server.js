function cl(x){console.log(x)}
var express = require('express');
var app = express();
// var upload = multer({ dest: 'uploads/' });

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  //response.send("<form action='/upload' method='post'><button type='button'>upload file</button><button type='submit' name='bob' value='fred'>submit</button></form>");
});

/*
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
})
*/

app.get("/upload", function (request, response) {
  cl(request);
  response.send(request.params.bob);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
