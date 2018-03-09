const express = require('express');
const path = require('path');
const app = express();

// Link styles
app.use("/css",express.static(__dirname + "/css"));

// Link images
app.use("/img",express.static(__dirname + "/img"));


///
///     ROUTING:
///

//  Home page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// settings
app.get('/settings', function(req, res) {
    res.sendFile(path.join(__dirname + '/settings.html'));
});
// support
app.get('/support', function(req, res) {
    res.sendFile(path.join(__dirname + '/support.html'));
});
// module 1 - Substitution variables
app.get('/subvars', function(req, res) {
    res.sendFile(path.join(__dirname + '/subvars.html'));
});



app.listen(3000, () => console.log('PoC app listening on port 3000!'));
