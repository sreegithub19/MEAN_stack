/*
//     http://localhost:3001/jetpunk.html
//     concurrently "node app.js" "node app_1.js"
const express = require('express');
const app = express();
//const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`jetpunk.html`);
});
var port = "3001";
app.set('port', port);
module.exports = app;
//app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
*/
// http://localhost:3001/people_1   - to run the app
// http://localhost:3001/fetch?url=http://localhost:3000/jetpunk.html
const express = require('express');
const request = require('request');
const body_parser = require('body-parser');
const mysql = require('mysql');
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");
const PeopleRoutes_1 = require("./routes/people_1");
const PeopleRoutes_2 = require("./routes/people_2");
var app = express();
//const port = process.env.PORT || 5000;

//app.use(body_parser.urlencoded({ extended: false}));
//app.use(body_parser.urlencoded({ extended: false}));
/*************************************************************************/ 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
/**********************************************************************/
app.use(body_parser.json());
app.use("/people_1",PeopleRoutes_1);
//Listen on environment port or 5000
app.listen(3001);

///////////////////////////////////////////
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send(`jetpunk.html`);
  
});
var port = "3001";
app.set('port', port);

/*************************************************************************/ 
app.get('/fetch', (req, res) => {
    request(
      { url: req.query.url },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).send('error');
        }
        res.send(body);
      }
    )
  });
/********************************************************************/

module.exports = app;









