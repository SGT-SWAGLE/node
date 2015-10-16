var fs = require('fs');
var url = require('url');
var http = require('http');
var ROOT_DIR = "Document";


http.createServer(function (req, res) {
    
  var urlObj = url.parse(req.url, true, false);
  console.log("opening " + ROOT_DIR + urlObj.pathname);
  if (urlObj.pathname == "/getcity")
  {
      
       //console.log("URL = = = = =  == = = = = = = = = = = =  = = = = = = = =");
      //co
      //console.log(url);
      //console.log("HTTP = = = = =  == = = = = = = = = = = =  = = = = = = = =");
       //console.log(http);
       //console.log("FS = = = = =  == = = = = = = = = = = =  = = = = = = = =");
      //console.log (fs);
      console.log("in Rest SERVICE!!");
       console.log(ROOT_DIR + urlObj.pathname);
      console.log(urlObj);
      res.writeHead(200);
      var myReg = new RegExp('^' + urlObj.query["q"]);
      var jsonresult = [];
       fs.readFile(ROOT_DIR + urlObj.pathname + ".txt", function (err,data)
       {
           if(err) throw err;
           cities = data.toString().split("\n");
          for (var i = 0; i < cities.length; i++)
          {
              var result = cities[i].search(myReg);
             // console.log(cities[i]);
             // console.log(myReg);
              if (result != -1)
              {
                  jsonresult.push({city:cities[i]});
              }
          }
          res.end(JSON.stringify(jsonresult));
          console.log (jsonresult);
       });
       
      
  } else {
     
     var indexurl = ROOT_DIR + urlObj.pathname;
     console.log(indexurl);
     
    fs.readFile(indexurl, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    }
      
    res.writeHead(200);
    res.end(data);
    });
  }
}).listen(8123);

console.log("Server running");