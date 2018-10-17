require("dotenv").config();
const express = require("express");
const {json} = require("body-parser");
const session = require("express-session");

const app = express();

app.use(json());
app.use(session({
    saveUninitialized:true,
    cookie:{
        maxAge:100000
    },
    resave:false,
    secret:process.env.SECRET
}))

let myName = "Ethan";

app.put("/api/session", (req,res)=>{
    const {name} = req.body;

    if(name ===myName){
        req.session.username = name;
        res.status(200).send(req.session)
    }
    else{
        req.status(500).send(err=>{
            console.log(err);
        })
    }
})

let port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("Listening on port: "+port)
})