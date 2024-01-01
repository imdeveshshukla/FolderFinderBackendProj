const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

app.get("/files",(req,res)=>{
  fs.readdir("./Files",(err,files)=>{
    if(err)
    {
      console.error("Error :",err);
      return;
    }
    res.json(200,files);
  })
});

app.get("/files/:filename",(req,res)=>{
  const fileName = req.params.filename;
  fs.readFile("./Files/"+fileName,(err,val)=>{
    if(err)
    {
      console.error("Error ",err)
      res.send(404);
      return;
    }
    res.json(val.toString());
    
  })
});

app.listen(3000,()=>{console.log("STarted");});


module.exports = app;