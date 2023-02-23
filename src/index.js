const express = require('express');
const cors = require("cors");
const {register,login} = require('./controllers/auth.controller');
const courseController= require("./controllers/coursesController");  

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.json());

app.post("/register", register);
app.post("/login",login);

app.get("", (req, res)=>{
    try{
        return res.send("welcome")
    }catch(err){
        console.log(err)
    }
})
app.use("/course",courseController); 

module.exports = app;
