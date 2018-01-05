// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));




// http://expressjs.com/en/starter/basic-routing.htmlhttps://timestamp-ms.herokuapp.com/December%2015,%202015
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get('/:TIME', function(req,res){
       
        var ret = { unix: null, natural: null };
        var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
        if(/^\d+/.test(req.params.TIME)){
                var date = new Date (req.params.TIME*1000);
               
        } else {
                var date = new Date (req.params.TIME);
               
        }
  
        if(date.getTime()){
          ret.unix = parseInt(req.params.TIME);
          ret.natural = month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();  
        }
      
  
        // res.end(JSON.stringify(ret));
        res.json(ret);
     
});
  
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
