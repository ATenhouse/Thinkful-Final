var express = require('express');
var app = express();
app.use(express.static('public'));

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);

var def_port = process.env.PORT || 3000;

console.log("Environmental port is " + def_port);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/detail', function(req, res) {
    res.sendFile(__dirname + '/public/detail.html');
});
app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/loginSuccess',
        failureRedirect: '/loginFailure'
    })
);

app.get('/loginFailure', function(req, res, next) {
    res.send('Failed to authenticate');
});

app.get('/loginSuccess', function(req, res, next) {
    res.send('Successfully authenticated');
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
  process.nextTick(function() {
    // Auth Check Logic
  });
}));

app.listen(def_port);

module.exports = {
    app: app
}