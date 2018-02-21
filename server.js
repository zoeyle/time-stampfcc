// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
app.use(express.static('public'));




app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get('/:TIME', function(req,res){
       
        var ret = { unix: null, natural: null };
        var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var date;
        if(/^\d+/.test(req.params.TIME)){// receive natural date 
            date = new Date (req.params.TIME*1000);
            ret.unix = req.params.TIME;
        } else {  //receive unix time
            date = new Date (req.params.TIME);
            ret.unix = new Date(req.params.TIME)/1000;
        }   
        
        if(date.getTime()){ //if given time is a real date
           ret.natural = month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();  
        }    
  
        // res.end(JSON.stringify(ret));
        res.json(ret);
     
});
  
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
