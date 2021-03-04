//Load express module with `require` directive
var express = require('express')
var app = express()
//Define port
var port = 9996
//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('I created this project like a little boy')
})
//Launch listening server on port 3000
app.listen(port, function () {
    console.log('this is project3 listening on port ${port}!')
})