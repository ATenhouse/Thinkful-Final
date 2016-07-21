var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    zRequest = require('request');

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

var outsideCall = function(expectedJson) {
    var baseURL = "https://api.lootbox.eu"
    var plat = expectedJson.platform;
    var region = expectedJson.region;
    var battletag = expectedJson.battletag;
    var requestURL = baseURL + "/" + plat + "/" + region + "/" + battletag + "/profile";
    console.log("request URL:" + requestURL);
    zRequest(requestURL, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            return body;
        } else {
            console.log(error);
        }
    });
};

app.get('/', urlencodedParser, function(req, res) {
    res.sendFile('views/form.html', {
        root: __dirname
    });
});

app.post('/', urlencodedParser, function(req, res) {
    console.log(req.body);
    var realBody = outsideCall(req.body);
    console.log(realBody);
    res.send(JSON.stringify(realBody));
});

var listenPort = process.env.PORT || 3000;

app.listen(listenPort);