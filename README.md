Steps to run MERN_stack (M:MySQL, E:Express, R:React, N:Node.js) (I have used MySQL instead of MongoDB):<br>
(1) Commands to run the app:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(i) npm install express-generator -g<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(ii) npm install -g express<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(iii) express myapp<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(iv) cd myapp<br>
(2) Replace the contents in <u>app.js</u> file with the content given here.<br>
(3) Create some more files in the project folder, namely app_1.js,app_2.js,connection.js.Copy the codes from here.
(4) I have renamed the index.html file (in the public folder) to <u>jetpunk.html</u>. Replace the code in that file with the content given here.<br>
(5) This is the site I referred to for getting the webpage: https://www.jetpunk.com/<br>
(6) To store the "jetpunk" folder in your system and run the express app, it should be stored in public/images folder.<br>
(7) The jetpunk_github_files folder need not be downloaded. It consists of files that do not generate CORS issues. Hence, we can use them directly from the folder here in github.<br>
(8) npm modules to be installed in the project: express,concurrently,mysql,body-parser. 
(9) Next set of commands to be run (in the myapp folder):<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(i) npm init   -  to create package.json file<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(ii) npm install   -  to create package-lock.json<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(iii) concurrently "node app.js" "node app_1.js" "node app_2.js" <br>
(10) The app starts running at: http://localhost:3000/jetpunk.html<br>
(11) The links of the files belonging to the "jetpunk_github_files" folder have been used directly from the "jetpunk_github_files" folder uploaded here in github, which enables Github to act as a database for some of our code files(All the files belonging to the jetpunk webpage cannot be used in a similar way due to CORS issues. The files producing CORS issues should be saved in our system under the folder name "jetpunk").<br>
(12) Mysql and Mysql workbench should be installed in our system. Some of the values in the web page have been stored in the MySQL database and have been retrieved from there.<br>
<br>

(Miscellaneous:) (Just tried MongoDB )
     &nbsp;&nbsp;&nbsp;&nbsp;(i) MongoDB project name and link : Github_Integration (https://cloud.mongodb.com/v2/608cf43d7674d77d3ad2a205#clusters) <br>
     &nbsp;&nbsp;&nbsp;&nbsp;(ii) MongoDB Cluster name and link: RealmCluster (https://cloud.mongodb.com/v2/608cf43d7674d77d3ad2a205#clusters/detail/RealmCluster) <br>
     &nbsp;&nbsp;&nbsp;&nbsp;(iii) MongoDB deployment page showing the syncing of Github and MongoDB:(https://realm.mongodb.com/groups/608cf43d7674d77d3ad2a205/apps/608cf4c491df81692a04a638/deployment/config) <br>
     &nbsp;&nbsp;&nbsp;&nbsp;(iv) 3rd party service (Github): https://realm.mongodb.com/groups/608cf43d7674d77d3ad2a205/apps/608cf4c491df81692a04a638/services
