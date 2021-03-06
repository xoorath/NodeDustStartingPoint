var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    app = express();

app.engine('dust', cons.dust);


app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Server Started On Port 3000');

});
