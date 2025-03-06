const express = require("express");

const app = express();

app.get("/ping",(req,res)=>{
    res.send("Suhas");
})

app.listen(8000,()=>{
    console.log("Server connected successfully");
})