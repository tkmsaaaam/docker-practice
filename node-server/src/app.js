const express = require("express");
const app = express();

const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});
const now = new Date();
const response = [
    {
        now: now,
    }
]

app.get("/", function(req, res, next){
    res.header("Connection", "keep-alive")
    res.header("keep-alive", "timeout=180, max=2")
    res.json(response);
});
