const express = require("express");
const app = express();

const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", function(req, res, next){
    res.json([
      {
          now: new Date,
      }
  ]);
});

app.get("/redirect", function(req, res, next){
    res.redirect(req.headers.host + '/');
});
