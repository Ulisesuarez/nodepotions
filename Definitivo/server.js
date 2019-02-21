var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressLogging = require('express-logging');
var logger = require('logops');
app.use(bodyParser.json());
app.use(expressLogging(logger));
const cors = require('cors');
const corsOptions = {
  origin: '*', //'http://localhost:8081',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});
 
require('./app/route/customer.route.js')(app);
require('./app/route/user.route.js')(app);
// Create a Server
var server = app.listen(9022, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("App listening at http://%s:%s", host, port);
});