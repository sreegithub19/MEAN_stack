//const { Router, query } = require('express');
const express = require('express');
const Router = express.Router();
const Router1 = express.Router();
const Router2 = express.Router();
const mysqlConnection = require("../connection");

Router.get("/",(req,res)=>{
    mysqlConnection.query("\
    SELECT * \
    from customers where\
    customer_id=5 \
    ", (err,rows,fields)=>{
    if(!err){
        res.send(rows);
        console.log(rows[0]["customer_id"]);

    }
    else console.log(err);
})
})

Router1.get("/",(req,res)=>{
    mysqlConnection.query("\
    SELECT * \
    from customers \
    ", (err,rows,fields)=>{
    if(!err){
        res.send(rows);
        console.log(rows);
    }
    else console.log(err);
})
})

Router2.get("/",(req,res)=>{
    mysqlConnection.query("\
    SELECT * \
    from top_categories \
    ", (err,rows,fields)=>{
    if(!err){
        res.send(rows);
        //console.log(rows[0]["customer_id"]);

    }
    else console.log(err);
})
})
module.exports = Router2;  // only second one (if 2 are there)