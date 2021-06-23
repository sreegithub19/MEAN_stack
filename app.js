/*
//     http://localhost:3000/jetpunk.html
//    concurrently "node app.js" "node app_1.js"
*/
// http://localhost:3000/people   - to run the app
// http://localhost:3000/fetch?url=Your URL here
// http://localhost:3001/fetch?url=http://localhost:3000/jetpunk.html
const express = require('express');
const request = require('request');
const body_parser = require('body-parser');
const mysql = require('mysql');
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");
const PeopleRoutes_1 = require("./routes/people_1");
const PeopleRoutes_2 = require("./routes/people_2");
const open = require('open');
var app = express();
//const port = process.env.PORT || 5000;

//app.use(body_parser.urlencoded({ extended: false}));
/**********************************************************************/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
/**********************************************************************/
app.use(body_parser.json());
app.use("/people",PeopleRoutes);
//Listen on environment port or 5000
app.listen(3000);

///////////////////////////////////////////
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> body, html { height: 100%; margin: 0; } .content { position: absolute; top: 15%; left:25%; background: rgb(0, 0, 0); /* Fallback color */ background: rgba(0, 0, 0, 0.76); /* Black background with 0.5 opacity */ color: #f1f1f1; width: 50%; padding: 20px; } .bg { /* The image used */ background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRqNquWxQHJAPgugDwzXokAU_dQUXzknUTA&usqp=CAU"); /* Full height */ height: 100%; /* Center and scale the image nicely */ background-position: center; background-repeat: no-repeat; background-size: cover; } table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } div.parent { text-align: center; } ul { display: inline-block; text-align: left; }</style>\
    </head> <body> <div class="bg"></div>  <div class="content"> <h1 id="home" \
        style="text-align: center;font-weight: bold;text-decoration: underline;">\
            WELCOME TO JAVASCRIPT APPLICATIONS!!</h1> \
   <h3 style="text-align:center;"> Click on any of the below JavaScript apps!</h3>\
   <div class="parent"> <ul>\
        <li><a href=\'http://localhost:3000/jetpunk.html\'>Jetpunk_3000</a></li> \
        <li><a href=\'http://localhost:3001/jetpunk.html\'>Jetpunk_3001</a></li> \
        <li><a href=\'http://localhost:3002/jetpunk.html\'>Jetpunk_3002</a></li> \
        <li><a href=\'http://localhost:3000/apps_list\'>JavaScript apps</a></li>\
           \
   </ul> </div> \
       </div> </body> </html>`);
});
var port = "3000";
app.set('port', port);

/**********************************************************************/
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
/**********************************************************************/
app.get("/apps_list", (req, res) => {
  res.send(
    '<!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> body, html { height: 100%; margin: 0; } .content { position: absolute; top: 15%; left:25%; background: rgb(0, 0, 0); /* Fallback color */ background: rgba(0, 0, 0, 0.76); /* Black background with 0.5 opacity */ color: #f1f1f1; width: 50%; padding: 20px; } .bg { /* The image used */ background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRqNquWxQHJAPgugDwzXokAU_dQUXzknUTA&usqp=CAU"); /* Full height */ height: 100%; /* Center and scale the image nicely */ background-position: center; background-repeat: no-repeat; background-size: cover; } table { font-family: arial, sans-serif; border-collapse: collapse; width: 100%; } td, th { border: 1px solid #dddddd; text-align: left; padding: 8px; } div.parent { text-align: center; } ul { display: inline-block; text-align: left; }</style>\
    </head> <body> <div class="bg"></div>  <div class="content"> <h1 id="home" \
        style="text-align: center;font-weight: bold;text-decoration: underline;">\
            WELCOME TO JAVASCRIPT APPLICATIONS!!</h1> \
   <h3 style="text-align:center;"> Click on any of the below JavaScript apps!</h3>\
   <div class="parent"> <ul>\
        <li><a href=\'http://localhost:3000/calculator\'>Calculator</a></li> \
       <li><a href=\'http://localhost:3000/maze\'>Maze</a></li>\
        <li><a href=\'http://localhost:3000/tic_tac_toe\'>Tic-tac-toe</a></li>\
        <li><a href=\'http://localhost:3000/clock\'>Analogue clock</a></li>\
        <li><a href=\'http://localhost:3000/hangman\'>Hangman</a></li>\
        <li><a href=\'http://localhost:3000/puzzles\'>Estonian puzzles</a></li>\
        <li><a href=\'http://localhost:3000/sudokus\'>Sudoku</a></li>\
        <li><a href=\'http://localhost:3000/virtual_keyboard\'>Virtual keyboard</a></li>\
           \
   </ul> </div> \
       </div> </body> </html>'
  );
});

app.get("/sudokus",(req,res)=>{
  res.send(`
    <!DOCTYPE html>
<html>
<head>
    <!-- Copyright (c) Microsoft Corporation. All Rights Reserved. -->
<title>HTML5 Sudoku</title>        
    <meta http-equiv="Content-Language" content="en-us" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="application-name" content="HTML5 Sudoku" />
    <meta name="msapplication-tooltip" content="Play Sudoku on IE TestDrive" />
    <meta name="msapplication-starturl" content="https://internetexplorer.github.io/Sudoku/" />
    <meta name="msapplication-navbutton-color" content="#C40502" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style>
        html,body
{
width: 100%;
height: 100%;
border: 0px;
overflow: auto;
}

body
{
margin: 0px;
padding: 0px;
background: #E10A04 url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/backgroundx.png') repeat-x;
font-family: Arial;
color: #FFAEAE;
font-size: 12px;
}

body,table,tr,td,div
{
margin: 0px;
padding: 0px;
border: 0px;
}

b
{
color: #FFFFFF;
font-weight: bold;
}

#Wrapper
{
background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/background.png') no-repeat top center;
min-height: 720px;
}



#Main,#Content,#Footer
{
width: 980px;
margin: 0 auto;
}

#PageTitle
{
font-family: Segoe UI, Arial;
font-weight: normal;
color: #FFFFFF;
font-size: 33px;
}

a
{
color: #FFAEAE;
text-decoration: none;
}

a:hover
{
color: #FFFFFF;
text-decoration: none;
}

#Content
{
float: left;
}

#Column1
{
width: 300px;
float: left;
}

#sudokuBoard
{
width: 426px;
margin-left: 40px;
float: left;
box-shadow: 0px 0px 30px #680301;
-moz-box-shadow: 0px 0px 30px #680301;
-webkit-box-shadow: 0 0 30px #680301;
}

#Column2
{
width: 174px;
margin-left: 40px;
float: left;
}

#Footer
{
margin-top: 600px;
color: #910502;
}

#FooterDetails
{
float: left;
font-size: 11px;
}

#Copyright
{
float: right;
font-size: 10px;
}

td.boardCellGroupA,td.boardCellGroupB
{
background-color: #940302;
}

td.boardCellGroupA td.boardCell
{
width: 44px;
height: 44px;
border: 1px solid #EC0904;
background-color: #DA0603;
}

td.boardCellGroupB td.boardCell
{
width: 44px;
height: 44px;
border: 1px solid #D40703;
background-color: #C40502;
}

.staticValue
{
font-family: Segoe UI, Arial;
text-align: center;
vertical-align: middle;
font-size: 30px;
color: #6C0000;
}

.staticValue,.editValue
{
width: 42px;
height: 42px;
padding: 0px;
margin: 0px;
border: 1px solid #DA0603;
}

.editValue:hover
{
background: #940302;
}

label
{
position: relative;
top: 3px;
line-height: 24px;
font-size: 15px;
color: #FFFFFF;
}

select
{
font-family: Arial;
color: #999999;
font-weight: normal;
font-size: 12px;
border-top: solid 1px #CCCCCC;
border-left: solid 1px #E2E3EA;
border-bottom: solid 1px #FFFFFF;
border-right: solid 1px #E2E3EA;
margin: 3px 0px;
min-width: 100px;
background: #FDFDFD;
}

#timeFinished
{
font-family: Segoe UI, Arial;
font-size: 46px;
font-weight: bold;
line-height: 40px;
}

.finishedLabel,#timeFinished
{
color: #FBF2A8;
}

.editValue input
{
font-family: Segoe UI, Arial;
font-size: 30px;
color: #FFFFFF;
width: 44px;
/*height: 44px;*/
padding: 0px;
border: 0px;
background: none !important;
text-align: center;
vertical-align: middle;
position: relative;
left: -1px;
}

input[type="submit"]
{
font-family: Arial;
font-size: 18px;
color: #FFFFFF;
text-transform: uppercase;
border: 0px;
min-width: 162px;
min-height: 34px;
background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/submitBackground.png') repeat-x;
margin: 8px 0px;
cursor: pointer;
}

input[type="submit"].gameControls
{
font-family: Arial;
font-size: 16px;
color: #FFFFFF;
text-transform: uppercase;
border: 0px;
min-width: 28px;
min-height: 28px;
background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/submitSmallBackground.png') repeat-x;
margin: 8px 0px;
padding: 2px 16px;
cursor: pointer;
}

.gameControlSet
{
height: 142px;
position: relative;
top: -8px;
}

#buttonSolve
{
margin-top: 119px;
color: #FFAEAE;
}

#youWon
{
width: 100%;
height: 100%;
position: absolute;
top: 0px;
right: 0px;
background: url('https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/shade.png') repeat;
}

#youWon div
{
width: 400px;
background: #940302;
font-size: 40px;
color: #FFFFFF;
text-align: center;
padding: 40px;
margin: 100px auto 0px auto;
}

small
{
font-size: 14px;
color: #FFFD7B;
}

.noErrors
{
font-size: 18px;
font-weight: bold;
color: #FFFFFF;
}

.errorsFound
{
font-size: 18px;
font-weight: bold;
color: #ED823F;
}

.error
{
border: 1px solid #ED823F;
}
    </style>
<link rel="shortcut icon" href="https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/icon.ico" type="image/x-icon" />
</head>
<body>
    <div id="Wrapper">
        <div id="Main">
            <h1 id="PageTitle">HTML5 Sudoku</h1>
            <div id="Content">
                <div id="Column1">
                    <span role="tab" aria-selected="true" aria-controls="demoIntro" tabindex="100">In this demo we take the well-known game of Sudoku, and demonstrate how developers can use HTML5 and JavaScript to create an efficient algorithm to solve these puzzles. The algorithms draw heavily on the Chakra engine’s support for ECMAScript 5 standard array operations to rapidly solve many Sudoku games. You can also manually solve Sudoku puzzles.</span>
                    <br/>
                    <br/>
                    <br/>
                    <label># of Games:</label>&nbsp;&nbsp;
                        <select id="difficulty">
                            <option value="1">1000</option>
                            <option value="2" selected>5000</option>
                            <option value="3">10000</option>
                        </select>
                    <input id="amazeButton" type="submit" value="SOLVE GAMES" />
                    <br/>
                    <br/>
                    <div id="calculating" style="display: none;">
                        <img src="https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/iconTime.png" alt="Calculating Clock" /><span class="finishedLabel">Solving puzzles...</span>
                    </div>
                    <div role="tab" aria-selected="true" aria-controls="perfResults" tabindex="200" id="finishedCalculating" style="display: none;">
                        <img src="https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/sudoku/images/iconTime.png" alt="Calculating Clock" /><span class="finishedLabel">Finished In:</span>
                        <br/>
                        <span id="timeFinished"></span>
                    </div>
                </div>
                <div id="sudokuBoard">
                    <table cellspacing="0" cellpadding="0">
                        <tr>
                            <td class="boardCellGroupA">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="00" class="staticValue">
                                                <span>6</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="01" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="02" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="10" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="11" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="12" class="staticValue">
                                                <span>4</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="20" class="staticValue">
                                                <span>2</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="21" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="22" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="boardCellGroupB">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="03" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="04" class="staticValue">
                                                <span>9</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="05" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="13" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="14" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="15" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="23" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="24" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="25" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="boardCellGroupA">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="06" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="07" class="staticValue">
                                                <span>2</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="08" class="staticValue">
                                                <span>4</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="16" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="17" class="staticValue">
                                                <span>3</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="18" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="26" class="staticValue">
                                                <span>1</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="27" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="28" class="staticValue">
                                                <span>9</span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="boardCellGroupB">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="30" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="31" class="staticValue">
                                                <span>6</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="32" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="40" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="41" class="staticValue">
                                                <span>9</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="42" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="50" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="51" class="staticValue">
                                                <span>5</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="52" class="staticValue">
                                                <span>1</span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="boardCellGroupA">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="33" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="34" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="35" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="43" class="staticValue">
                                                <span>1</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="44" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="45" class="staticValue">
                                                <span>4</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="53" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="54" class="staticValue">
                                                <span>2</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="55" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="boardCellGroupB">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="36" class="staticValue">
                                                <span>3</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="37" class="staticValue">
                                                <span>5</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="38" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="46" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="47" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="48" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="56" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="57" class="staticValue">
                                                <span>9</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="58" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="boardCellGroupA">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="60" class="staticValue">
                                                <span>5</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="61" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="62" class="staticValue">
                                                <span>6</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="70" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="71" class="staticValue">
                                                <span>2</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="72" class="staticValue">
                                                <span>9</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="80" class="staticValue">
                                                <span>7</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="81" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="82" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="boardCellGroupB">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="63" class="editValue error">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="64" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="65" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="73" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="74" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="75" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="83" class="staticValue">
                                                <span>5</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="84" class="staticValue">
                                                <span>1</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="85" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="boardCellGroupA">
                                <table cellspacing="1" cellpadding="0">
                                    <tr>
                                        <td class="boardCell">
                                            <div id="66" class="staticValue">
                                                <span>9</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="67" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="68" class="staticValue">
                                                <span>8</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="76" class="staticValue">
                                                <span>5</span>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="77" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="78" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="boardCell">
                                            <div id="86" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="87" class="editValue">
                                                <input/>
                                            </div>
                                        </td>
                                        <td class="boardCell">
                                            <div id="88" class="staticValue">
                                                <span>6</span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="Column2">
                    <div class="gameControlSet">
                        <input id="newGameButton" type="submit" value="NEW GAME" class="gameControls"/>
                        <br/>
                        <label>
                            Level:
                        </label>&nbsp;&nbsp;
                        <select id="difficulty">
                            <option value="1" selected>Easy</option>
                            <option value="2">Medium</option>
                            <option value="3">Hard</option>
                            <option value="4">Very Hard</option>
                            <option value="5">Insane</option>
                        </select>
                    </div>
                    <div class="gameControlSet">
                        <input id="checkButton" type="submit" value="CHECK &#x2713;" class="gameControls"/>
                        <br/>
                        <span id="errorsFound" class="errorsFound" style="display: none;" role="tab" aria-selected="true" aria-controls="ErrorsFound" tabindex="300">MISTAKE FOUND</span>
                        <span id="noErrors" class="noErrors" style="display: none;" role="tab" aria-selected="true" aria-controls="NoErrorsFound" tabindex="400">LOOKIN GOOD</span>
                    </div>
                    <div class="gameControlSet">
                        <input id="solveButton" type="submit" value="SOLVE" class="gameControls"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="youWon" style="display: none;">
        <div>
            <span role="alert" aria-selected="true" aria-controls="youWin" tabindex="500">YOU WIN!</span>
            <br/>
            <small role="tab" aria-selected="true" aria-controls="youWinText" tabindex="600">
                Great job. Can you do it again?
            </small>
            <br/>
            <br/>
            <input id="winNewGameButton" type="submit" value="NEW GAME" class="gameControls"/>
            <input id="winCloseButton" type="submit" value="CLOSE" class="gameControls"/>
        </div>
    </div>
    <script>
        function solveSudoku(inputBoard, stats) {

var stats = stats || {};
stats['easy'] = true;
var board = JSON.parse(JSON.stringify(inputBoard));
var possibilities = [[], [], [], [], [], [], [], [], []];

for(var i = 0; i < 9; i++) {
for(var j = 0; j < 9; j++) {
  possibilities[i][j] = [false, true, true, true, true, true, true, true, true, true];
}
}

var solved = false;
var impossible = false;
var mutated = false;
var needCheckFreedoms = false;

//TODO: check input is a valid puzzle

var loopCount = 0;

outerLoop: while(!solved && !impossible) {
solved = true;
mutated = false;
loopCount++;

var leastFree = [];
var leastRemaining = 9;

for(var i = 0; i < 9; i++) {
  for(var j = 0; j < 9; j++) {
    
    if(board[i][j] === 0) {
      
      solved = false;
      var currentPos = possibilities[i][j];
      
      var zoneRow;
      var zoneCol;
      
      if(loopCount === 1) {
        zoneRow = getZone(i) * 3;
        zoneCol = getZone(j) * 3;
        currentPos[10] = zoneRow;
        currentPos[11] = zoneCol;
      } else {
        zoneRow = currentPos[10];
        zoneCol = currentPos[11];
      }
      
      var wasMutated =  reducePossibilities(board, i, j, currentPos, zoneRow, zoneCol);
      
      if(wasMutated) {
        mutated = true;
      }
      
      
      // check if the contraints above left us with only one valid option
      var remaining = 0;
      var lastDigit = 0;
    
      for(var k = 1; k <= 9; k++) {
        if(currentPos[k]) {
          remaining++;
          lastDigit = k;
        }
      }
    
      if(remaining === 0) {
        //console.log("no remaining " + i + " " + j);
        impossible = true;
        break outerLoop;
      }
      else if(remaining === 1) {
        board[i][j] = lastDigit;
        mutated = true;
        continue;
      }

      if(needCheckFreedoms) {
        var solution = checkFreedoms(board, i, j, possibilities, zoneRow, zoneCol);
        
        if(solution !== 0) {
          
          board[i][j] = solution;
          mutated = true;
          continue;
        }

        if(remaining === leastRemaining) {
          leastFree.push([i,j]);
        }
        else if(remaining < leastRemaining) {
          leastRemaining = remaining;
          leastFree = [[i,j]];
        }
      }
      
    }
  }
}

if(mutated === false && solved === false) {
  
  // time to break out freedom checking
  if(needCheckFreedoms === false) {
    needCheckFreedoms = true;
    stats['medium'] = true;
    continue;
  }
  
  // we're stuck, time to start guessing
  return solveByGuessing(board, possibilities, leastFree, stats);
  
}
}

if(impossible) {
//window.console && console.log("board is impossible");
return null;
}
else {
return board;
}
}

function getZone(i) {
if(i < 3) {
return 0;
}
else if(i < 6) {
return 1;
}
else {
return 2;
}
}


function reducePossibilities(board, row, column, currentPos, zoneRow, zoneCol) {

var mutated = false;

//eliminate items already taken in the column and row
for(var k = 0; k < 9; k++) {
if(currentPos[board[row][k]] || currentPos[board[k][column]]) {
  mutated = true;
}
currentPos[board[row][k]] = false;
currentPos[board[k][column]] = false;
}

//eliminate items already taken in the region
for(var x = zoneRow; x <= (zoneRow + 2); x++) {
for(var y = zoneCol; y <= (zoneCol + 2); y++) {
  var zoneDigit = board[x][y];
  
  if(currentPos[zoneDigit]) {
    mutated = true;
  }
  
  currentPos[zoneDigit] = false;
}
}

return mutated;
}

function checkFreedoms(board, i, j, possibilities, zoneRow, zoneCol) {

var answer = 0;
var currentPos = possibilities[i][j];
//see if only one square can realize a possibility
      
var uniquePosRow = currentPos.slice(0);
var uniquePosCol = currentPos.slice(0);
var uniquePosCube = currentPos.slice(0);

for(var k = 0; k < 9; k++) {
for(var l = 1; l <= 9; l++) {
  if(board[i][k] === 0 && possibilities[i][k][l] && k !== j) {
    uniquePosRow[l] = false;
  }
  if(board[k][j] === 0 && possibilities[k][j][l] && k !== i) {
    uniquePosCol[l] = false;
  }
}
}

var remainingRow = 0;
var remainingCol = 0;
var lastDigitRow = 0;
var lastDigitCol = 0;

for(var k = 1; k <= 9; k++) {
if(uniquePosRow[k]) {
  remainingRow++;
  lastDigitRow = k;
}
if(uniquePosCol[k]) {
  remainingCol++;
  lastDigitCol = k;
}
}

if(remainingRow === 1) {
answer = lastDigitRow;
return answer;
}

if(remainingCol === 1) {
answer = lastDigitCol;
return answer;
}

for(var x = zoneRow; x <= (zoneRow + 2); x++) {
for(var y = zoneCol; y <= (zoneCol + 2); y++) {
  for(var l = 1; l <= 9; l++) {
    if(board[x][y] === 0 && possibilities[x][y][l] && (x !== i || y !== j)) {
      uniquePosCube[l] = false;
    }
  }
}
}

var remainingCube = 0;
var lastDigitCube = 0;

for(var k = 1; k <= 9; k++) {
if(uniquePosCube[k]) {
  remainingCube++;
  lastDigitCube = k;
}
}

if(remainingCube == 1) {
answer = lastDigitCube;
}

return answer;

}

function solveByGuessing(board, possibilities, leastFree, stats) {
if(leastFree.length < 1) {
return null;
}

if('hard' in stats) {
stats['vhard'] = true;
}
else {
stats['hard'] = true;
}

// choose a space with the least # of possibilities
var randIndex = getRandom(leastFree.length);
var randSpot = leastFree[randIndex];

var guesses = [];
var currentPos = possibilities[randSpot[0]][randSpot[1]];

for(var i = 1; i <= 9; i++) {
if(currentPos[i]) {
  guesses.push(i);
}
}

shuffleArray(guesses);

for(var i = 0; i < guesses.length; i++) {
board[randSpot[0]][randSpot[1]] = guesses[i];
var result = solveSudoku(board, stats);
if(result != null) {
  return result;
}
}

// board is impossible
return null;
}


// returns a random number in the range 0 to limit - 1 inclusive
function getRandom(limit) {
return Math.floor(Math.random() * limit);
}

// shuffle an array Fisher-Yates style
function shuffleArray(array) {
var i = array.length;

if(i !== 0) {
while(--i) {
  var j = Math.floor(Math.random() * (i + 1));
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
}
}

// for benchmarking, use a random generator from a seed
(function() {

// some dummy value to start with
var last = 31337;
var randomBackup = Math.random;

// Linear Congruential Generator
var fakeRandom = function() {
var a = 214013;
var c = 2531011;
//2^32
var m = 4294967296;

var next = (a * last + c) % m;

last = next;
return next / m;
}

Math.enableFakeRandom = function() {
Math.random = fakeRandom;
}

Math.disableFakeRandom = function() {
Math.random = randomBackup;
}

Math.fakeRandomSeed = function(seed) {
last = seed;
}

})();


function generatePuzzle(difficulty) {

if(difficulty !== 1 && difficulty !== 2 && 
difficulty !== 3 && difficulty !== 4  && 
difficulty !== 5) {
  
difficulty = 1;
}

var solvedPuzzle = solveSudoku(emptyPuzzle);

var indexes = new Array(81);

for(var i = 0; i < 81; i++) {
indexes[i] = i;
}

shuffleArray(indexes);

var knownCount = 81;

for(var i = 0; i < 81; i++) {

if(knownCount <= 25) {
  break;
}

//easy check
if(difficulty == 1 && knownCount <= 35) {
  break;
}

var index = indexes[i];

var row = Math.floor(index / 9);
var col = index % 9;
var currentValue = solvedPuzzle[row][col];
var state = {};
solvedPuzzle[row][col] = 0;
var resolvedPuzzle = solveSudoku(solvedPuzzle, state);

// some clarity -- what the solver considers 'medium' is hard for most users
var undo = false;
if(difficulty <= 2 && state.medium) {
  undo = true;
} else if(difficulty <= 3 && state.hard) {
  undo = true;
} else if(difficulty <= 4 && state.vhard) {
  undo = true;
}

if(undo) {
  solvedPuzzle[row][col] = currentValue;
}
else {
  knownCount--;
}


}

return solvedPuzzle;

}


function verifySolution(board, onlyFullySolved) {

var resp = {};
resp['valid'] = false;

if(board === null) {
window.console && console.log("Not a board");
resp['invalidBoard'] = "Board was null";
return resp;
}

var rows = [];
var cols = [];
var cubes = [ [[], [], []], [[], [], []], [[], [], []]];
for(var i = 0; i < 9; i++) {
rows.push([]);
cols.push([]);
}

for(var i = 0; i < 9; i++) {
for(var j = 0; j < 9; j++) {
  var digit = board[i][j];
  
  if(digit === 0) {
    if(onlyFullySolved) {
      resp['notFullySolved'] = "Board still has unknowns";
      return resp;
    } else {
      continue;
    }
  }
  
  if(digit in rows[i]) {
    resp['badRow'] = i;
    return resp;
  }
  else {
    rows[i][digit] = true;
  }
  
  if(digit in cols[j]) {
    resp['badCol'] = j;
    return resp;
  }
  else {
    cols[j][digit] = true;
  }
  
  var cube = cubes[getZone(i)][getZone(j)];
  
  if(digit in cube) {
    resp['badCube'] = [getZone(i) * 3, getZone(j) * 3];
    return resp;
  }
  else {
    cube[digit] = true;
  }

}
}

resp['valid'] = true;
return resp;
}

var easyPuzzle = [
[5, 3, 0, 0, 7, 0, 0, 0, 0],
[6, 0, 0, 1, 9, 5, 0, 0, 0],
[0, 9, 8, 0, 0, 0, 0, 6, 0],
[8, 0, 0, 0, 6, 0, 0, 0, 3],
[4, 0, 0, 8, 0, 3, 0, 0, 1],
[7, 0, 0, 0, 2, 0, 0, 0, 6],
[0, 6, 0, 0, 0, 0, 2, 8, 0],
[0, 0, 0, 4, 1, 9, 0, 0, 5],
[0, 0, 0, 0, 8, 0, 0, 7, 9]
];

var easyPuzzle2 = [
[1, 6, 0, 0, 0, 3, 0, 0, 0],
[2, 0, 0, 7, 0, 6, 0, 1, 4],
[0, 4, 5, 0, 8, 1, 0, 0, 7],
[5, 0, 8, 4, 0, 0, 0, 0, 0],
[0, 0, 4, 3, 0, 8, 9, 0, 0],
[0, 0, 0, 0, 0, 7, 2, 0, 8],
[8, 0, 0, 6, 3, 0, 1, 9, 0],
[6, 3, 0, 1, 0, 5, 0, 0, 2],
[0, 0, 0, 8, 0, 0, 0, 3, 6]
];

var easyPuzzle3 = [
[8, 1, 0, 0, 2, 9, 0, 0, 0],
[4, 0, 6, 0, 7, 3, 0, 5, 1],
[0, 7, 0, 0, 0, 0, 8, 0, 2],
[0, 0, 4, 5, 0, 0, 0, 0, 6],
[7, 6, 0, 0, 0, 0, 0, 1, 3],
[1, 0, 0, 0, 0, 6, 2, 0, 0],
[2, 0, 7, 0, 0, 0, 0, 8, 0],
[6, 9, 0, 2, 8, 0, 3, 0, 5],
[0, 0, 0, 9, 6, 0, 0, 2, 4]
];

var solvedPuzzle = [
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var invalidPuzzle = [
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[8, 2, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var hardPuzzle = [
[0, 0, 3, 0, 0, 8, 0, 0, 0],
[0, 4, 0, 0, 0, 0, 0, 0, 0],
[0, 8, 0, 3, 5, 0, 9, 0, 0],
[8, 0, 5, 0, 0, 6, 0, 0, 0],
[1, 0, 0, 7, 3, 2, 0, 0, 8],
[0, 0, 0, 8, 0, 0, 3, 0, 1],
[0, 0, 8, 0, 1, 4, 0, 7, 0],
[0, 0, 0, 0, 0, 0, 0, 5, 0],
[0, 0, 0, 9, 0, 0, 2, 0, 0]
];

var mediumPuzzle = [
[0, 8, 3, 7, 0, 0, 0, 9, 0],
[0, 0, 7, 0, 5, 0, 6, 4, 0],
[0, 0, 0, 9, 0, 0, 0, 0, 3],
[0, 0, 0, 1, 0, 0, 0, 0, 7],
[0, 6, 9, 2, 0, 4, 3, 8, 0],
[7, 0, 0, 0, 0, 9, 0, 0, 0],
[9, 0, 0, 0, 0, 3, 0, 0, 0],
[0, 5, 6, 0, 2, 0, 4, 0, 0],
[0, 1, 0, 0, 0, 7, 5, 3, 0]
];

var emptyPuzzle = [
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function stressTest() {

var intervalCount = 0;
var intervalId = window.setInterval(function() {
intervalCount++;
if(intervalCount  > 500) {
  window.console && console.log("finished");
  window.clearInterval(intervalId);
}
var newPuzzle = solveSudoku(emptyPuzzle);
var resp = verifySolution(newPuzzle);

if(resp['valid'] === false) {
  window.console && console.log("Boo! " + intervalCount);
  printBoard(newPuzzle);
}

}, 1);

}

function cellInputHandler(event) {
if(!this.value.match(/^[1-9]$/)) {
this.value = "";
}
}

function renderBoard(board) {
for(var i = 0; i < 9; i++) {
for(var j = 0; j < 9; j++) {
  var id = "" + i + j;
  var el = document.getElementById(id);
  var val = board[i][j];
  var child;
  var elClass;
  
  if(val === 0) {
    child = document.createElement("input");
    child.setAttribute('maxlength', 1);
    child.addEventListener('keyup', cellInputHandler, false);
    child.addEventListener('blur', cellInputHandler, false);
    elClass = "editValue";
  }
  else {
    child = document.createElement("span");
    child.textContent = val;
    elClass = "staticValue"; 
  }
  
  el.innerHTML = "";
  el.setAttribute("class", elClass);
  el.appendChild(child);
}
}
}

// render the board a special way when the algorithm solves it for the user
// make it look like the user entered it in
function renderSolvedBoard(board) {
for(var i = 0; i < 9; i++) {
for(var j = 0; j < 9; j++) {
  var id = "" + i + j;
  var el = document.getElementById(id);
  var val = board[i][j];
  var child = el.children[0];
  if(child.tagName === 'INPUT') {
    child.value = val;
  }
}
}
}

function getCurrentBoard() {

var board = new Array(9);

for(var i = 0; i < 9; i++) {
for(var j = 0; j < 9; j++) {
  if(j === 0) {
    board[i] = new Array(9);
  }
  var id = "" + i + j;
  var el = document.getElementById(id);
  var child = el.children[0];
  var value = "0";
  if(child.tagName === 'INPUT') {
    value = child.value;
  }
  else if(child.tagName == 'SPAN') {
    value = child.textContent;
  }
  if(value.match(/^[1-9]$/)) {
    value = parseInt(value);
  } else {
    //TODO: prompt user for invalid chars
    value = 0;
  }
  board[i][j] = value;
}
}

return board;
}

function printBoard(board) {
for(var i = 0; i < 9; i++) {
var line = "";
for(var j = 0; j < 9; j++) {
  line += " " + board[i][j];
}
window.console && console.log(line);
}
}

function solveTest(level, after) {

var easyCount = 2000;
var hardCount = 200;

switch(level) {
case 1:
  easyCount = 475;
  hardCount = 25;
  break;
case 2:
  easyCount = 2375;
  hardCount = 125;
  break;
case 3:
  easyCount = 4750;
  hardCount = 250;
  break;
}

Math.enableFakeRandom();
Math.fakeRandomSeed(31337);

renderBoard(easyPuzzle);

var timeElapsed = 0;

var tests = [];
tests.push(function() {
timeElapsed += solveTestHelper(easyPuzzle, easyCount);
});
tests.push(function() {
timeElapsed += solveTestHelper(easyPuzzle2, easyCount);
});
tests.push(function() {
timeElapsed += solveTestHelper(mediumPuzzle, hardCount);
});
tests.push(function() {
timeElapsed += solveTestHelper(hardPuzzle, hardCount);
});
tests.push(function() {
Math.disableFakeRandom();
document.getElementById("timeFinished").textContent = timeElapsed.toFixed(3) + "s";
});
tests.push(after);

var current = 0;

var timeoutFunc = function() {
if(current < tests.length) {
  tests[current]();
  current++;
  window.setTimeout(timeoutFunc, 300);
}
}

window.setTimeout(timeoutFunc, 300);

}

function solveTestHelper(puzzle, iterations) {
var solution = null;
var start = new Date();
for(var i = 0; i < iterations; i++) {
solution = solveSudoku(puzzle);
}
var end = new Date();
renderBoard(puzzle);
renderSolvedBoard(solution);
var timeElapsed = (end.getTime() - start.getTime()) / 1000;
return timeElapsed;
}

function initialize() {
// hook up buttons

var currentPuzzle = generatePuzzle();
renderBoard(currentPuzzle);

var amazeButton = document.getElementById('amazeButton');
var calculatingDiv = document.getElementById('calculating');
var finishedCalculatingDiv = document.getElementById('finishedCalculating');
var winBlock = document.getElementById('youWon');
var noErrorsSpan = document.getElementById('noErrors');
var errorsFoundSpan = document.getElementById('errorsFound');
var difficulty = document.getElementById('difficulty');
var currentErrors = [];
var amazing = false;

var clearErrors = function() {

errorsFoundSpan.style.display = 'none';
noErrorsSpan.style.display = 'none';

for(var i = 0; i < currentErrors.length; i++) {
  currentErrors[i].setAttribute('class', currentErrors[i].getAttribute('class').replace(" error", ''))
}
currentErrors = [];
}

amazeButton.addEventListener('click', function() {
if(!amazing) {
  var level = parseInt(difficulty.options[difficulty.selectedIndex].value);
  amazing = true;
  clearErrors();
  finishedCalculatingDiv.style.display = 'none';
  calculatingDiv.style.display = 'block';

  solveTest(level, function() {
    finishedCalculatingDiv.style.display = 'block';
    calculatingDiv.style.display = 'none';
    amazing = false;
    currentPuzzle = hardPuzzle;
  });
}
}, false);

var checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', function() {

clearErrors();

var board = getCurrentBoard();
var result = verifySolution(board);
if(result['valid']) {

  var validMessages = [ "LOOKIN GOOD", "KEEP GOING", "AWESOME", "EXCELLENT", 
    "NICE", "SWEET", "LOOKS GOOD TO ME"];
  
  if(verifySolution(board, true)['valid']) {
    winBlock.style.display = 'block';
  }
  else {
    var randIndex = getRandom(validMessages.length);
    noErrorsSpan.textContent = validMessages[randIndex];
    noErrorsSpan.style.display = 'block';
  }
}
else {
  if('badRow' in result) {
    var row = result['badRow'];
    for(var i = 0; i < 9; i++) {
      var id = "" + row + i;
      var el = document.getElementById(id);
      el.setAttribute("class", el.getAttribute('class') + " error");
      currentErrors.push(el);
    }
  }
  else if('badCol' in result) {
    var col = result['badCol'];
    for(var i = 0; i < 9; i++) {
      var id = "" + i + col;
      var el = document.getElementById(id);
      el.setAttribute("class", el.getAttribute('class') + " error");
      currentErrors.push(el);
    }
  }
  else if('badCube' in result) {
    var cubeRow = result['badCube'][0];
    var cubeCol = result['badCube'][1];
    for(var x = cubeRow + 2; x >= cubeRow; x--) {
      for(var y = cubeCol + 2; y >= cubeCol; y--) {
        var id = "" + x + y;
        var el = document.getElementById(id);
        el.setAttribute("class", el.getAttribute('class') + " error");
        currentErrors.push(el);
      }
    }
    
  }
  errorsFoundSpan.style.display = 'block';
}


}, false);

var winCloseButton = document.getElementById('winCloseButton');

winCloseButton.addEventListener('click', function() {
winBlock.style.display = 'none';
}, false);

var winNewGameButton = document.getElementById('winNewGameButton');

winNewGameButton.addEventListener('click', function() {
clearErrors();
var value = parseInt(difficulty.options[difficulty.selectedIndex].value);
currentPuzzle = generatePuzzle(value);
renderBoard(currentPuzzle);
winBlock.style.display = 'none';
}, false);

var newGameButton = document.getElementById('newGameButton');

newGameButton.addEventListener('click', function() {
clearErrors();
var value = parseInt(difficulty.options[difficulty.selectedIndex].value);
currentPuzzle = generatePuzzle(value);
renderBoard(currentPuzzle);
}, false);

var solveButton = document.getElementById('solveButton');

solveButton.addEventListener('click', function() {
clearErrors();
renderSolvedBoard(solveSudoku(currentPuzzle));
}, false);

addEventListener('mouseup', function(event) {
if(event.which === 1) {
  noErrorsSpan.style.display = 'none';
}
}, false);

}

addEventListener('DOMContentLoaded', initialize, false);
    </script>
</body>
</html>
  `);
});

app.get("/puzzles",(req,res)=>{
res.send(`
<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<title>Picture Puzzle</title>
<style>
body {
    font-family: 'Segoe UI', Calibri, Arial;
    margin:0;
    background-color: lightgreen;
}
h2{
    font-weight:normal;
    text-align:center;
}
h3{
    font-weight:normal;
    margin:3px 0px;
    text-align:center;
}
#collage hr{
border:none;
border-top:2px solid #f5f2f2;
height:1px;
}

#collage #playPanel {
background-color:#c2defc;
padding:10px 0px;
margin: 10px auto;
max-width:800px;
width:95%;
}

#collage #actualImageBox {
display: inline-block;
font-size:0.8em;
margin: 10px 10px;
vertical-align: top;
width:280px;
}

#collage #stepBox, #collage #timeBox {
display:inline-block;
width:48%;
}

#collage #stepBox div {
background-color:#c2defc;
display:inline-block;
padding:1px 4px;
margin: 0px auto;
max-width:800px;
}

#collage img#actualImage{
border:2px solid #a46;
height:280px;
width:280px;
}

#collage #sortable {
border:2px solid #a46;
list-style-type: none;
display: inline-block;
margin: 10px;
padding: 0;
width: 400px;
}

#collage #sortable li {
    background-size: 400% 400%;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    float: left;
    width: 100px;
    height: 100px;
}

#collage button  {
background-color:#f5f2f2;
border:1px solid #cce;
display: inline;
font-size: 14px;
height: auto;
width: auto;
padding: 3px 8px;
}
</style>

<script>
    var timerFunction;

var imagePuzzle = {
stepCount: 0,
startTime: new Date().getTime(),
startGame: function (images, gridSize) {
    this.setImage(images, gridSize);
    $('#playPanel').show();
    $('#sortable').randomize();
    this.enableSwapping('#sortable li');
    this.stepCount = 0;
    this.startTime = new Date().getTime();
    this.tick();
},
tick: function () {
    var now = new Date().getTime();
    var elapsedTime = parseInt((now - imagePuzzle.startTime) / 1000, 10);
    $('#timerPanel').text(elapsedTime);
    timerFunction = setTimeout(imagePuzzle.tick, 1000);
},
enableSwapping: function (elem) {
    $(elem).draggable({
        snap: '#droppable',
        snapMode: 'outer',
        revert: "invalid",
        helper: "clone"
    });
    $(elem).droppable({
        drop: function (event, ui) {
            var $dragElem = $(ui.draggable).clone().replaceAll(this);
            $(this).replaceAll(ui.draggable);

            currentList = $('#sortable > li').map(function (i, el) { return $(el).attr('data-value'); });
            if (isSorted(currentList))
                $('#actualImageBox').empty().html($('#gameOver').html());
            else {
                var now = new Date().getTime();
                imagePuzzle.stepCount++;
                $('.stepCount').text(imagePuzzle.stepCount);
                $('.timeCount').text(parseInt((now - imagePuzzle.startTime) / 1000, 10));
            }

            imagePuzzle.enableSwapping(this);
            imagePuzzle.enableSwapping($dragElem);
        }
    });
},

setImage: function (images, gridSize) {
    console.log(gridSize);
    gridSize = gridSize || 4; // If gridSize is null or not passed, default it as 4.
    console.log(gridSize);
    var percentage = 100 / (gridSize - 1);
    var image = images[Math.floor(Math.random() * images.length)];
    $('#imgTitle').html(image.title);
    $('#actualImage').attr('src', image.src);
    $('#sortable').empty();
    for (var i = 0; i < gridSize * gridSize; i++) {
        var xpos = (percentage * (i % gridSize)) + '%';
        var ypos = (percentage * Math.floor(i / gridSize)) + '%';
        var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
            'background-image': 'url(' + image.src + ')',
            'background-size': (gridSize * 100) + '%',
            'background-position': xpos + ' ' + ypos,
            'width': 400 / gridSize,
            'height': 400 / gridSize
        });
        $('#sortable').append(li);
    }
    $('#sortable').randomize();
}
};

function isSorted(arr) {
for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] != i)
        return false;
}
return true;
}
$.fn.randomize = function (selector) {
var $elems = selector ? $(this).find(selector) : $(this).children(),
    $parents = $elems.parent();

$parents.each(function () {
    $(this).children(selector).sort(function () {
        return Math.round(Math.random()) - 0.5;
    }).remove().appendTo(this);
});
return this;
};
</script>
</head>
<body>
<div id="collage">
    <h2>Picture Puzzle</h2>
    <hr />
    <div id="playPanel" style="padding:5px;display:none;">
        <h3 id="imgTitle"></h3> <hr />
        <div style="display:inline-block; margin:auto; width:95%; vertical-align:top;">
            <ul id="sortable" class="sortable"></ul>
            <div id="actualImageBox">
                <div id="stepBox">
                    <div>Count:</div><div class="stepCount">0</div>
                </div>
                <div id="timeBox">
                    Time: <span id="timerPanel"></span> seconds
                </div>
                <img id="actualImage" />
                <div>See the picture and solve the puzzle.</div>
                <p id="levelPanel">
                    <input type="radio" name="level" id="easy" checked="checked" value="3" /> <label for="easy">Easy</label>
                    <input type="radio" name="level" id="medium" value="4" /> <label for="medium">Medium</label>
                    <input type="radio" name="level" id="hard" value="5" /> <label for="hard">Hard</label>
                    <input type="radio" name="level" id="veryhard" value="6" /> <label for="veryhard">Very Hard</label>
                </p>
                <div>
                    <button id="btnRule" type="button" class="btn" onclick="rules();">Rules</button>
                    <button id="newPhoto" type="button" class="btn">Next Picture</button>
                </div>
            </div>
        </div>
    </div>
    <div id="gameOver" style="display:none;">
        <div style="background-color: #fc9e9e; padding: 5px 10px 20px 10px; text-align: center; ">
            <h2 style="text-align:center">Game over !!</h2>
            Congratulations!! <br /> You got the picture ready.
            <br />
            Time: <span class="stepCount">0</span> gear.
            <br />
            Time spent: <span class="timeCount">0</span> seconds<br />
            <div>
                <button type="button" onclick="window.location.reload(true);">Play more</button>
            </div>
        </div>
    </div>

    <script>
    var images = [
        { src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/neeruti.jpg', title: 'Neeruti manor' },
        { src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/harju_madise.jpg', title: 'Harju-Madis Church' },
        { src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/rahumae.jpg', title: 'Rahumäe train station' },
        { src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/kakumae.jpg', title: 'Kakumäe Harbor' },
        { src: 'https://raw.githubusercontent.com/sreegithub19/JavaScript-Applications/main/public/puzzle/img/kohila.jpg', title: 'Kohila mill' }
    ];
    
    $(function () {
        var gridSize = $('#levelPanel :radio:checked').val();
        imagePuzzle.startGame(images, gridSize);
        $('#newPhoto').click(function () {
            var gridSize = $('#levelPanel :radio:checked').val();
            imagePuzzle.startGame(images, gridSize);
        });
    
        $('#levelPanel :radio').change(function (e) {
            var gridSize = $(this).val();
            imagePuzzle.startGame(images, gridSize);
        });
    });
    function rules() {
        alert('Rearrange the pieces so that you get a sample image. The steps taken are counted');
    }
    </script>
    </div>
</body>
</html>
`);
});

app.get("/calculator", (req, res) => {
  res.send(`
    <html>
    <head>
    <style>
    html {
      font-size: 62.5%;
      box-sizing: border-box;
    }
    
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    .calculator {
      border: 1px solid #ccc;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
    }
    
    .calculator-screen {
      width: 100%;
      font-size: 5rem;
      height: 80px;
      border: none;
      background-color: #252525;
      color: #fff;
      text-align: right;
      padding-right: 20px;
      padding-left: 10px;
    }
    
    button {
      height: 60px;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #c4c4c4;
      background-color: transparent;
      font-size: 2rem;
      color: #333;
      background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
      text-shadow: 0 1px rgba(255,255,255,.4);
    }
    
    button:hover {
      background-color: #eaeaea;
    }
    
    .operator {
      color: #337cac;
    }
    
    .all-clear {
      background-color: #f0595f;
      border-color: #b0353a;
      color: #fff;
    }
    
    .all-clear:hover {
      background-color: #f17377;
    }
    
    .equal-sign {
      background-color: #2e86c0;
      border-color: #337cac;
      color: #fff;
      height: 100%;
      grid-area: 2 / 4 / 6 / 5;
    }
    
    .equal-sign:hover {
      background-color: #4e9ed4;
    }
    
    .calculator-keys {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      padding: 20px;
    }
    </style>
    </head>
    <body>
    <div class="calculator">
    
      <input type="text" class="calculator-screen" value="" disabled />
      
      <div class="calculator-keys">
        
        <button type="button" class="operator" value="+">+</button>
        <button type="button" class="operator" value="-">-</button>
        <button type="button" class="operator" value="*">&times;</button>
        <button type="button" class="operator" value="/">&divide;</button>
    
        <button type="button" value="7">7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>
    
    
        <button type="button" value="4">4</button>
        <button type="button" value="5">5</button>
        <button type="button" value="6">6</button>
    
    
        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>
    
    
        <button type="button" value="0">0</button>
        <button type="button" class="decimal" value=".">.</button>
        <button type="button" class="all-clear" value="all-clear">AC</button>
    
        <button type="button" class="equal-sign operator" value="=">=</button>
    
      </div>
    </div>
    <script>
    const calculator = {
      displayValue: '0',
      firstOperand: null,
      waitingForSecondOperand: false,
      operator: null,
    };
    
    function inputDigit(digit) {
      const { displayValue, waitingForSecondOperand } = calculator;
    
      if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
      } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
      }
    }
    
    function inputDecimal(dot) {
      if (calculator.waitingForSecondOperand === true) {
          calculator.displayValue = "0."
        calculator.waitingForSecondOperand = false;
        return
      }
    
      if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
      }
    }
    
    function handleOperator(nextOperator) {
      const { firstOperand, displayValue, operator } = calculator
      const inputValue = parseFloat(displayValue);
      
      if (operator && calculator.waitingForSecondOperand)  {
        calculator.operator = nextOperator;
        return;
      }
    
    
      if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
      } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
    
        calculator.displayValue = \`\${parseFloat(result.toFixed(7))}\`;
        calculator.firstOperand = result;
      }
    
      calculator.waitingForSecondOperand = true;
      calculator.operator = nextOperator;
    }
    
    function calculate(firstOperand, secondOperand, operator) {
      if (operator === '+') {
        return firstOperand + secondOperand;
      } else if (operator === '-') {
        return firstOperand - secondOperand;
      } else if (operator === '*') {
        return firstOperand * secondOperand;
      } else if (operator === '/') {
        return firstOperand / secondOperand;
      }
    
      return secondOperand;
    }
    
    function resetCalculator() {
      calculator.displayValue = '0';
      calculator.firstOperand = null;
      calculator.waitingForSecondOperand = false;
      calculator.operator = null;
    }
    
    function updateDisplay() {
      const display = document.querySelector('.calculator-screen');
      display.value = calculator.displayValue;
    }
    
    updateDisplay();
    
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', event => {
      const { target } = event;
      const { value } = target;
      if (!target.matches('button')) {
        return;
      }
    
      switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          handleOperator(value);
          break;
        case '.':
          inputDecimal(value);
          break;
        case 'all-clear':
          resetCalculator();
          break;
        default:
          if (Number.isInteger(parseFloat(value))) {
            inputDigit(value);
          }
      }
    
      updateDisplay();
    });
    </script>
    </body>
    </html>`);
});

app.get("/maze", (req, res) => {
  res.send(`<html lang="en-GB">
    <head>
      <meta charset="utf-8">
      <style>
        $menuHeight: 65px+10px;
    @mixin transition {
        transition-property: background-color opacity;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }
    
    html,
    body {
        width: 100vw;
        height: 100vh;
        position: fixed;
        padding: 0;
        margin: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    #mazeContainer {
        transition-property: opacity;
        transition-duration: 1s;
        transition-timing-function: linear;
        top: $menuHeight;
        opacity: 0;
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.30);
        margin: auto;
    
        #mazeCanvas {
            margin: 0;
            display: block;
            border: solid 1px black;
        }
    }
    
    input,
    select {
        @include transition;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.30);
        height: 45px;
        width: 150px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        color: white;
        display: inline-block;
        font-size: 15px;
        text-align: center;
        text-decoration: none;
        appearance: none;
        &:hover {
            background-color: rgba(0, 0, 0, 0.70);
        }
        &:active {
            background-color: black;
        }
        &:focus {
            outline: none;
        }
    }
    
    
    .custom-select {
        display: inline-block;
        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
            background-repeat: no-repeat;
            background-position: 125px center;
        }
    }
    
    #Message-Container {
        visibility: hidden;
        color: white;
        display: block;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.30);
        z-index: 1;
        #message {
            width: 300px;
            height: 300px;
            position: fixed;
            top: 50%;
            left: 50%;
            margin-left: -150px;
            margin-top: -150px;
        }
    }
    
    #page {
        font-family: "Segoe UI", Arial, sans-serif;
        text-align: center;
        height: auto;
        width: auto;
        margin: auto;
        #menu {
            margin: auto;
            padding: 10px;
            height: 65px;
            box-sizing: border-box;
            h1 {
                margin: 0;
                margin-bottom: 10px;
                font-weight: 600;
                font-size: 3.2rem;
            }
        }
        #view {
            position: absolute;
            top:65px;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: auto;
               
        }
    }
    
    .border {
        border: 1px black solid;
        border-radius: 5px;
    }
    
    
    
    #gradient {
        z-index: -1;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        color: #fff;
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        animation: Gradient 15s ease infinite;
    }
    
    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    
     /* Extra small devices (phones, 600px and down) */
     @media only screen and (max-width: 400px) {
         input, select{
             width: 120px;
         }
     }
    
      </style>
      <body>
        <div id="gradient"></div>
        <div id="page">
          <div id="Message-Container">
            <div id="message">
              <h1>Congratulations!</h1>
              <p>You are done.</p>
              <p id="moves"></p>
              <input id="okBtn" type="button" onclick="toggleVisablity('Message-Container')" value="Cool!" />
            </div>
          </div>
          <div id="menu">
            <div class="custom-select">
              <select id="diffSelect">
                        <option value="10">Easy</option>
                        <option value="15">Medium</option>
                        <option value="25">Hard</option>
                        <option value="38">Extreme</option>                                      
                    </select>
            </div>
            <input id="startMazeBtn" type="button" onclick="makeMaze()" value="Start" />
          </div>
          <div id="view">
            <div id="mazeContainer">
              <canvas id="mazeCanvas" class="border" height="1100" width="1100"></canvas>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>
        <script>
          function rand(max) {
      return Math.floor(Math.random() * max);
    }
    
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    
    function changeBrightness(factor, sprite) {
      var virtCanvas = document.createElement("canvas");
      virtCanvas.width = 500;
      virtCanvas.height = 500;
      var context = virtCanvas.getContext("2d");
      context.drawImage(sprite, 0, 0, 500, 500);
    
      var imgData = context.getImageData(0, 0, 500, 500);
    
      for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = imgData.data[i] * factor;
        imgData.data[i + 1] = imgData.data[i + 1] * factor;
        imgData.data[i + 2] = imgData.data[i + 2] * factor;
      }
      context.putImageData(imgData, 0, 0);
    
      var spriteOutput = new Image();
      spriteOutput.src = virtCanvas.toDataURL();
      virtCanvas.remove();
      return spriteOutput;
    }
    
    function displayVictoryMess(moves) {
      document.getElementById("moves").innerHTML = "You Moved " + moves + " Steps.";
      toggleVisablity("Message-Container");  
    }
    
    function toggleVisablity(id) {
      if (document.getElementById(id).style.visibility == "visible") {
        document.getElementById(id).style.visibility = "hidden";
      } else {
        document.getElementById(id).style.visibility = "visible";
      }
    }
    
    function Maze(Width, Height) {
      var mazeMap;
      var width = Width;
      var height = Height;
      var startCoord, endCoord;
      var dirs = ["n", "s", "e", "w"];
      var modDir = {
        n: {
          y: -1,
          x: 0,
          o: "s"
        },
        s: {
          y: 1,
          x: 0,
          o: "n"
        },
        e: {
          y: 0,
          x: 1,
          o: "w"
        },
        w: {
          y: 0,
          x: -1,
          o: "e"
        }
      };
    
      this.map = function() {
        return mazeMap;
      };
      this.startCoord = function() {
        return startCoord;
      };
      this.endCoord = function() {
        return endCoord;
      };
    
      function genMap() {
        mazeMap = new Array(height);
        for (y = 0; y < height; y++) {
          mazeMap[y] = new Array(width);
          for (x = 0; x < width; ++x) {
            mazeMap[y][x] = {
              n: false,
              s: false,
              e: false,
              w: false,
              visited: false,
              priorPos: null
            };
          }
        }
      }
    
      function defineMaze() {
        var isComp = false;
        var move = false;
        var cellsVisited = 1;
        var numLoops = 0;
        var maxLoops = 0;
        var pos = {
          x: 0,
          y: 0
        };
        var numCells = width * height;
        while (!isComp) {
          move = false;
          mazeMap[pos.x][pos.y].visited = true;
    
          if (numLoops >= maxLoops) {
            shuffle(dirs);
            maxLoops = Math.round(rand(height / 8));
            numLoops = 0;
          }
          numLoops++;
          for (index = 0; index < dirs.length; index++) {
            var direction = dirs[index];
            var nx = pos.x + modDir[direction].x;
            var ny = pos.y + modDir[direction].y;
    
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              //Check if the tile is already visited
              if (!mazeMap[nx][ny].visited) {
                //Carve through walls from this tile to next
                mazeMap[pos.x][pos.y][direction] = true;
                mazeMap[nx][ny][modDir[direction].o] = true;
    
                //Set Currentcell as next cells Prior visited
                mazeMap[nx][ny].priorPos = pos;
                //Update Cell position to newly visited location
                pos = {
                  x: nx,
                  y: ny
                };
                cellsVisited++;
                //Recursively call this method on the next tile
                move = true;
                break;
              }
            }
          }
    
          if (!move) {
            //  If it failed to find a direction,
            //  move the current position back to the prior cell and Recall the method.
            pos = mazeMap[pos.x][pos.y].priorPos;
          }
          if (numCells == cellsVisited) {
            isComp = true;
          }
        }
      }
    
      function defineStartEnd() {
        switch (rand(4)) {
          case 0:
            startCoord = {
              x: 0,
              y: 0
            };
            endCoord = {
              x: height - 1,
              y: width - 1
            };
            break;
          case 1:
            startCoord = {
              x: 0,
              y: width - 1
            };
            endCoord = {
              x: height - 1,
              y: 0
            };
            break;
          case 2:
            startCoord = {
              x: height - 1,
              y: 0
            };
            endCoord = {
              x: 0,
              y: width - 1
            };
            break;
          case 3:
            startCoord = {
              x: height - 1,
              y: width - 1
            };
            endCoord = {
              x: 0,
              y: 0
            };
            break;
        }
      }
    
      genMap();
      defineStartEnd();
      defineMaze();
    }
    
    function DrawMaze(Maze, ctx, cellsize, endSprite = null) {
      var map = Maze.map();
      var cellSize = cellsize;
      var drawEndMethod;
      ctx.lineWidth = cellSize / 40;
    
      this.redrawMaze = function(size) {
        cellSize = size;
        ctx.lineWidth = cellSize / 50;
        drawMap();
        drawEndMethod();
      };
    
      function drawCell(xCord, yCord, cell) {
        var x = xCord * cellSize;
        var y = yCord * cellSize;
    
        if (cell.n == false) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + cellSize, y);
          ctx.stroke();
        }
        if (cell.s === false) {
          ctx.beginPath();
          ctx.moveTo(x, y + cellSize);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.e === false) {
          ctx.beginPath();
          ctx.moveTo(x + cellSize, y);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.w === false) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + cellSize);
          ctx.stroke();
        }
      }
    
      function drawMap() {
        for (x = 0; x < map.length; x++) {
          for (y = 0; y < map[x].length; y++) {
            drawCell(x, y, map[x][y]);
          }
        }
      }
    
      function drawEndFlag() {
        var coord = Maze.endCoord();
        var gridSize = 4;
        var fraction = cellSize / gridSize - 2;
        var colorSwap = true;
        for (let y = 0; y < gridSize; y++) {
          if (gridSize % 2 == 0) {
            colorSwap = !colorSwap;
          }
          for (let x = 0; x < gridSize; x++) {
            ctx.beginPath();
            ctx.rect(
              coord.x * cellSize + x * fraction + 4.5,
              coord.y * cellSize + y * fraction + 4.5,
              fraction,
              fraction
            );
            if (colorSwap) {
              ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            } else {
              ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            }
            ctx.fill();
            colorSwap = !colorSwap;
          }
        }
      }
    
      function drawEndSprite() {
        var offsetLeft = cellSize / 50;
        var offsetRight = cellSize / 25;
        var coord = Maze.endCoord();
        ctx.drawImage(
          endSprite,
          2,
          2,
          endSprite.width,
          endSprite.height,
          coord.x * cellSize + offsetLeft,
          coord.y * cellSize + offsetLeft,
          cellSize - offsetRight,
          cellSize - offsetRight
        );
      }
    
      function clear() {
        var canvasSize = cellSize * map.length;
        ctx.clearRect(0, 0, canvasSize, canvasSize);
      }
    
      if (endSprite != null) {
        drawEndMethod = drawEndSprite;
      } else {
        drawEndMethod = drawEndFlag;
      }
      clear();
      drawMap();
      drawEndMethod();
    }
    
    function Player(maze, c, _cellsize, onComplete, sprite = null) {
      var ctx = c.getContext("2d");
      var drawSprite;
      var moves = 0;
      drawSprite = drawSpriteCircle;
      if (sprite != null) {
        drawSprite = drawSpriteImg;
      }
      var player = this;
      var map = maze.map();
      var cellCoords = {
        x: maze.startCoord().x,
        y: maze.startCoord().y
      };
      var cellSize = _cellsize;
      var halfCellSize = cellSize / 2;
    
      this.redrawPlayer = function(_cellsize) {
        cellSize = _cellsize;
        drawSpriteImg(cellCoords);
      };
    
      function drawSpriteCircle(coord) {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(
          (coord.x + 1) * cellSize - halfCellSize,
          (coord.y + 1) * cellSize - halfCellSize,
          halfCellSize - 2,
          0,
          2 * Math.PI
        );
        ctx.fill();
        if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
          onComplete(moves);
          player.unbindKeyDown();
        }
      }
    
      function drawSpriteImg(coord) {
        var offsetLeft = cellSize / 50;
        var offsetRight = cellSize / 25;
        ctx.drawImage(
          sprite,
          0,
          0,
          sprite.width,
          sprite.height,
          coord.x * cellSize + offsetLeft,
          coord.y * cellSize + offsetLeft,
          cellSize - offsetRight,
          cellSize - offsetRight
        );
        if (coord.x === maze.endCoord().x && coord.y === maze.endCoord().y) {
          onComplete(moves);
          player.unbindKeyDown();
        }
      }
    
      function removeSprite(coord) {
        var offsetLeft = cellSize / 50;
        var offsetRight = cellSize / 25;
        ctx.clearRect(
          coord.x * cellSize + offsetLeft,
          coord.y * cellSize + offsetLeft,
          cellSize - offsetRight,
          cellSize - offsetRight
        );
      }
    
      function check(e) {
        var cell = map[cellCoords.x][cellCoords.y];
        moves++;
        switch (e.keyCode) {
          case 65:
          case 37: // west
            if (cell.w == true) {
              removeSprite(cellCoords);
              cellCoords = {
                x: cellCoords.x - 1,
                y: cellCoords.y
              };
              drawSprite(cellCoords);
            }
            break;
          case 87:
          case 38: // north
            if (cell.n == true) {
              removeSprite(cellCoords);
              cellCoords = {
                x: cellCoords.x,
                y: cellCoords.y - 1
              };
              drawSprite(cellCoords);
            }
            break;
          case 68:
          case 39: // east
            if (cell.e == true) {
              removeSprite(cellCoords);
              cellCoords = {
                x: cellCoords.x + 1,
                y: cellCoords.y
              };
              drawSprite(cellCoords);
            }
            break;
          case 83:
          case 40: // south
            if (cell.s == true) {
              removeSprite(cellCoords);
              cellCoords = {
                x: cellCoords.x,
                y: cellCoords.y + 1
              };
              drawSprite(cellCoords);
            }
            break;
        }
      }
    
      this.bindKeyDown = function() {
        window.addEventListener("keydown", check, false);
    
        $("#view").swipe({
          swipe: function(
            event,
            direction,
            distance,
            duration,
            fingerCount,
            fingerData
          ) {
            console.log(direction);
            switch (direction) {
              case "up":
                check({
                  keyCode: 38
                });
                break;
              case "down":
                check({
                  keyCode: 40
                });
                break;
              case "left":
                check({
                  keyCode: 37
                });
                break;
              case "right":
                check({
                  keyCode: 39
                });
                break;
            }
          },
          threshold: 0
        });
      };
    
      this.unbindKeyDown = function() {
        window.removeEventListener("keydown", check, false);
        $("#view").swipe("destroy");
      };
    
      drawSprite(maze.startCoord());
    
      this.bindKeyDown();
    }
    
    var mazeCanvas = document.getElementById("mazeCanvas");
    var ctx = mazeCanvas.getContext("2d");
    var sprite;
    var finishSprite;
    var maze, draw, player;
    var cellSize;
    var difficulty;
    // sprite.src = 'media/sprite.png';
    
    window.onload = function() {
      let viewWidth = $("#view").width();
      let viewHeight = $("#view").height();
      if (viewHeight < viewWidth) {
        ctx.canvas.width = viewHeight - viewHeight / 100;
        ctx.canvas.height = viewHeight - viewHeight / 100;
      } else {
        ctx.canvas.width = viewWidth - viewWidth / 100;
        ctx.canvas.height = viewWidth - viewWidth / 100;
      }
    
      //Load and edit sprites
      var completeOne = false;
      var completeTwo = false;
      var isComplete = () => {
        if(completeOne === true && completeTwo === true)
           {
             console.log("Runs");
             setTimeout(function(){
               makeMaze();
             }, 500);         
           }
      };
      sprite = new Image();
      sprite.src =
        "https://image.ibb.co/dr1HZy/Pf_RWr3_X_Imgur.png" +
        "?" +
        new Date().getTime();
      sprite.setAttribute("crossOrigin", " ");
      sprite.onload = function() {
        sprite = changeBrightness(1.2, sprite);
        completeOne = true;
        console.log(completeOne);
        isComplete();
      };
    
      finishSprite = new Image();
      finishSprite.src = "https://image.ibb.co/b9wqnJ/i_Q7m_U25_Imgur.png"+
      "?" +
      new Date().getTime();
      finishSprite.setAttribute("crossOrigin", " ");
      finishSprite.onload = function() {
        finishSprite = changeBrightness(1.1, finishSprite);
        completeTwo = true;
        console.log(completeTwo);
        isComplete();
      };
      
    };
    
    window.onresize = function() {
      let viewWidth = $("#view").width();
      let viewHeight = $("#view").height();
      if (viewHeight < viewWidth) {
        ctx.canvas.width = viewHeight - viewHeight / 100;
        ctx.canvas.height = viewHeight - viewHeight / 100;
      } else {
        ctx.canvas.width = viewWidth - viewWidth / 100;
        ctx.canvas.height = viewWidth - viewWidth / 100;
      }
      cellSize = mazeCanvas.width / difficulty;
      if (player != null) {
        draw.redrawMaze(cellSize);
        player.redrawPlayer(cellSize);
      }
    };
    
    function makeMaze() {
      //document.getElementById("mazeCanvas").classList.add("border");
      if (player != undefined) {
        player.unbindKeyDown();
        player = null;
      }
      var e = document.getElementById("diffSelect");
      difficulty = e.options[e.selectedIndex].value;
      cellSize = mazeCanvas.width / difficulty;
      maze = new Maze(difficulty, difficulty);
      draw = new DrawMaze(maze, ctx, cellSize, finishSprite);
      player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, sprite);
      if (document.getElementById("mazeContainer").style.opacity < "100") {
        document.getElementById("mazeContainer").style.opacity = "100";
      }
    }
    
        </script>
      </body>
    </html>`);
});

app.get("/tic_tac_toe", (req, res) => {
  res.send(
    `<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Tic Tac Toe</title>
        <style>
        body {
          font-family: "Arial", sans-serif;
      }
      
      section {
          text-align: center;
      }
      
      .game--container {
          display: grid;
          grid-template-columns: repeat(3, auto);
          width: 306px;
          margin: 50px auto;
      }
      
      .cell {
          font-family: "Permanent Marker", cursive;
          width: 100px;
          height: 100px;
          box-shadow: 0 0 0 1px #333333;
          border: 1px solid #333333;
          cursor: pointer;
      
          line-height: 100px;
          font-size: 60px;
      }
        </style>
    </head>
    <body>
        <section>
            <h1 class="game--title">Tic Tac Toe</h1>
            <div class="game--container">
                <div data-cell-index="0" class="cell"></div>
                <div data-cell-index="1" class="cell"></div>
                <div data-cell-index="2" class="cell"></div>
                <div data-cell-index="3" class="cell"></div>
                <div data-cell-index="4" class="cell"></div>
                <div data-cell-index="5" class="cell"></div>
                <div data-cell-index="6" class="cell"></div>
                <div data-cell-index="7" class="cell"></div>
                <div data-cell-index="8" class="cell"></div>
            </div>
            <h2 class="game--status"></h2>
            <button class="game--restart">Restart Game</button>
        </section>
    
        <script>
        const statusDisplay = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => \`Player \${currentPlayer} has won!\`;
const drawMessage = () => \`Game ended in a draw!\`;
const currentPlayerTurn = () => \`It's \${currentPlayer}'s turn\`;
statusDisplay.innerHTML = currentPlayerTurn();
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange();
}
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
        </script>
    </body>`
  );
});

app.get("/clock",(req,res)=>{
    res.send(`
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Analogue Clock</title>
    <style>
    body{
        background-color: #000;
    }
    
    #canvas{
        margin-left: 300px;
        margin-top: 50px;
    }
    </style>
</head>
<body>
    <canvas id="canvas" width="600" height="600"></canvas>
    <script>
    //create a canvas object fro HTML element
var canvas = document.getElementById('canvas');
//create a 2d drawing object
var ctx = canvas.getContext('2d');
//calculate the clock radius by using the height
var radius = canvas.height / 2;
//remap the x and y axis to the center of the canvas
ctx.translate(radius, radius);
//reduce clock radius by 90%
radius = radius * 0.90;

setInterval(drawClock, 1000); //run the drawClock function every second.

function drawClock(){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius){
    var grad;
    //draw white circle for the face
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle = "White";
    ctx.fill();
    // create a radial gradient (inner, middle, and outer edge of clock)
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    //define gradient as stroke style
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke(); 
    //draw the center of the clock
    ctx.beginPath();
    ctx.arc(0,0, radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial"; //set font at 15% of radius
    ctx.textBaseline = "middle"; //set text alignment to middle
    ctx.textAlign = "center"; //set text alignment to center
    for(num=1; num < 13; num++){ //calculate the print position for each number
        ang = num *Math.PI /6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    //calculate angle of hour hand
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    //make hour hand 50% of canvas's radius
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    //calculate angle of minute hand
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    //make minute hand 80% of canvas's radius
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    //second
    //calculate angle of second hand
    second=(second*Math.PI/30);
    //make second hand 90% of canvas's radius
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
    </script>
</body>
    `);
});

app.get("/hangman",(req,res)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hangman</title>
    <style>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

body {
    background: #2B292E;
    color: #fafafa;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

span {
    border-bottom: 1px solid #534f59;
    display: inline-block;
    font-size: 2rem;
    height: 2.4rem;
    line-height: 2.4rem;
    margin: 0 .1rem;
    text-align: center;
    text-transform: uppercase;
    width: 2.4rem;
}

p {
    font-weight: 300;
    margin-bottom: .8rem;
}

.puzzle {
    display: flex;
    margin-bottom: 4.8rem;
}

.button {
    background: #7044a0;
    border: none;
    border-bottom: 2px solid #603a88;
    cursor: pointer;
    color: white;
    font-size: 1.4rem;
    font-weight: 300;
    padding: .8rem;
    transition: background .3s ease, color .3s ease;
}

.button:hover {
    background: #5F3A87;
}
    </style>
</head>
<body>
    <div>
        <div id="puzzle" class="puzzle"></div>
        <p id="guesses"></p>
        <button id="reset" class="button">Reset</button>
    </div>
    <script>
    const getPuzzle = async (wordCount) => {
        const response = await fetch(\`https://puzzle.mead.io/puzzle?wordCount=\${wordCount}\`)
            if (response.status === 200){
                const data = await response.json()
                return data.puzzle
            } else {
                throw new Error('Unable to fetch puzzle')
            }
    }
    class Hangman {
        constructor(word, remainingGuesses){
            this.word = word.toLowerCase().split('');
            this.remainingGuesses = remainingGuesses;
            this.guessedLetters = [];
            this.status = 'playing';
        }
    
        get puzzle() {
            let puzzle = '';
            this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter;
            } else {
                puzzle += '*'
            }
            })
            return puzzle;
        }
    
        makeGuess (guess){
            guess = guess.toLowerCase();
            const isUnique = !this.guessedLetters.includes(guess);
            const isBadGuess = !this.word.includes(guess);
            
        if (this.status !== 'playing'){
            return
        }
        
            if (isUnique){
                this.guessedLetters.push(guess)
            }
                
            if (isUnique && isBadGuess){
                this.remainingGuesses--
            }
            this.calculateStatus();
        }
    
        get statusMessage(){
            if (this.status === 'playing'){
                return \`Guesses left: \${this.remainingGuesses}\`
            } else if (this.status === 'failed') {
                return \`Nice try! The word was "\${this.word.join('')}" \`
            } else {
                return 'Great work! You guessed the word!'
            }
        }
    
        calculateStatus(){
            const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
            
            if (this.remainingGuesses === 0){
                this.status = 'failed'
            } else if (finished){
                this.status = 'finished'
            } else {
                this.status = 'playing'
            }
        }
    
    }
    
    let game1
const puzzleDIV = document.querySelector('#puzzle');
const remainingDIV = document.querySelector('#guesses');

window.addEventListener('keypress', (e) => {

    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render()
})

const render = () => {
    puzzleDIV.innerHTML = ''
    remainingDIV.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleDIV.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('3')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()
    </script>
</body>
</html>
    `);
});

app.get("/virtual_keyboard",(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Virtual Keyboard ⌨️ </title>
        <style>
            body * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    
    .keyboard-base{
        max-width: 1085px;
        padding: 20px;
        position: absolute;
        top: 30%;
        background-color: rgb(252, 185, 185);
        border-radius: 10px;
        justify-content: center;
    
    
    }
    .section-a{
        display: flex;
    }
    
    .key {
        background-color: rgb(243, 243, 243);
        border: 2px solid black;
        border-radius: 5px;
        
        font-size: 20px;
        text-align: center;
        padding-top: 17px;
        width:50px;
        height:50px;
        margin:5px;
    }
    
    .key:hover{
        background-color: rgb(247, 100, 161);
    }
    .space {
        width: 100%;
    }
    
    .capslock{
        width:30%;
    }
    .leftshift{
        width:20%;
    }
    .return {
        width:20%;
        
    }
    textarea{
        width: 30%;
        height: 70px;
        font-size: 30px;
    }
        </style>
    </head>
    <body>
        <textarea type="text" id="inputText" value="" autofocus onblur="this.focus()" onkeydown="return false" onmouseup="getCaretPositon()"></textarea>
        
        <div class="keyboard-base">
        <div class="section-a">
            <div class="key" onclick="keyboardHandler(event)">~</div>
            <div class="key" onclick="keyboardHandler(event)">1</div>
            <div class="key" onclick="keyboardHandler(event)">2</div>
            <div class="key" onclick="keyboardHandler(event)">3</div>
            <div class="key" onclick="keyboardHandler(event)">4</div>
            <div class="key" onclick="keyboardHandler(event)">5</div>
            <div class="key" onclick="keyboardHandler(event)">6</div>
            <div class="key" onclick="keyboardHandler(event)">7</div>
            <div class="key" onclick="keyboardHandler(event)">8</div>
            <div class="key" onclick="keyboardHandler(event)">9</div>
            <div class="key" onclick="keyboardHandler(event)">0</div>
            <div class="key" onclick="keyboardHandler(event)">-</div>
            <div class="key" onclick="keyboardHandler(event)">+</div>
        </div>
        <div class="section-a">
            <div class="key" onclick="keyboardHandler(event)">Q</div>
            <div class="key" onclick="keyboardHandler(event)">W</div>
            <div class="key" onclick="keyboardHandler(event)">E</div>
            <div class="key" onclick="keyboardHandler(event)">R</div>
            <div class="key" onclick="keyboardHandler(event)">T</div>
            <div class="key" onclick="keyboardHandler(event)">Y</div>
            <div class="key" onclick="keyboardHandler(event)">U</div>
            <div class="key" onclick="keyboardHandler(event)">I</div>
            <div class="key" onclick="keyboardHandler(event)">O</div>
            <div class="key" onclick="keyboardHandler(event)">P</div>
            <div class="key" onclick="keyboardHandler(event)">[</div>
            <div class="key" onclick="keyboardHandler(event)">]</div>
            <div class="key backslash" onclick="keyboardHandler(event)">\</div>
        </div>
        <div class="section-a">
    
            <div class="key capslock" onclick="keyboardHandler(event)">CapsLock</div>
            <div class="key" onclick="keyboardHandler(event)">A</div>
            <div class="key" onclick="keyboardHandler(event)">S</div>
            <div class="key" onclick="keyboardHandler(event)">D</div>
            <div class="key"onclick="keyboardHandler(event)">F</div>
            <div class="key"onclick="keyboardHandler(event)">G</div>
            <div class="key"onclick="keyboardHandler(event)">H</div>
            <div class="key"onclick="keyboardHandler(event)">J</div>
            <div class="key" onclick="keyboardHandler(event)">K</div>
            <div class="key" onclick="keyboardHandler(event)">L</div>
            <div class="key" onclick="keyboardHandler(event)">;</div>
            <div class="key" onclick="keyboardHandler(event)">'</div>
            <div class="key return" onclick="keyboardHandler(event)">Back</div>
        </div>
        <div class="section-a">
    
            <div class="key leftshift" onclick="keyboardHandler(event)">Shift</div>
            <div class="key" onclick="keyboardHandler(event)">Z</div>
            <div class="key" onclick="keyboardHandler(event)">X</div>
            <div class="key" onclick="keyboardHandler(event)">C</div>
            <div class="key" onclick="keyboardHandler(event)">V</div>
            <div class="key" onclick="keyboardHandler(event)">B</div>
            <div class="key" onclick="keyboardHandler(event)">N</div>
            <div class="key" onclick="keyboardHandler(event)">M</div>
            <div class="key" onclick="keyboardHandler(event)">,</div>
            <div class="key" onclick="keyboardHandler(event)">.</div>
            <div class="key" onclick="keyboardHandler(event)">/</div>
        </div>
        <div class="section-a">
            <div class="key space" onclick="keyboardHandler(event)">Space</div>
            </div>
        </div>
    </body>
    <script>
        var input = document.getElementById("inputText");
    let bool = false;
    
    const keyboardHandler = (event) => {
      const caretPositon = getCaretPositon();
      const targetValue = event.target.innerText;
      let array = input.value.split("");
      let a;
    
      switch (targetValue) {
        case "Back":
          console.log(caretPositon);
          if (caretPositon == 0) {
            input.setSelectionRange(0, 0);
          } else {
            array.splice(caretPositon - 1, 1);
            a = array.join("");
            input.value = a;
            input.setSelectionRange(caretPositon - 1, caretPositon - 1);
          }
    
          break;
        case "CapsLock":
          toggleCaps();
          break;
        case "Shift":
          toggleShift();
          break;
        case "Space":
          array.splice(caretPositon, 0, " ");
          a = array.join("");
          input.value = a;
          input.setSelectionRange(caretPositon + 1, caretPositon + 1);
    
          break;
        default:
          array.splice(caretPositon, 0, event.target.innerText);
          a = array.join("");
          input.value = a;
          input.setSelectionRange(caretPositon + 1, caretPositon + 1);
    
          if (bool) {
            bool = false;
            toggleCaps();
          }
      }
    };
    
    function getCaretPositon() {
      return input.selectionStart;
    }
    
    const isUpperCase = (string) => /^[A-Z]*$/.test(string);
    
    const toggleCaps = () => {
      let keyboardKeys = document.getElementsByTagName("div");
      for (let i = 13; i < keyboardKeys.length; i++) {
        const innerElText = keyboardKeys[i].innerText;
        const innerTextLength = innerElText.length;
    
        if (innerTextLength == 1 && isUpperCase(innerElText)) {
          keyboardKeys[i].innerText = innerElText.toLowerCase();
        } else if (innerTextLength == 1) {
          keyboardKeys[i].innerText = keyboardKeys[i].innerText.toUpperCase();
        }
      }
    };
    
    const toggleShift = () => {
      toggleCaps();
      bool = true;
    };
    
    </script>
    </html>
    `);
});

module.exports = app;
open('http://localhost:3000/');








