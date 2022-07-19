const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const cors = require("cors");
const bodyParser = require('body-parser');
app
  .prepare()
  .then(() => {
    const corsOptions ={
        origin:['*'],
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200,
     }
     
    
     
    const server = express();
    server.use(bodyParser.json())
    server.use(cors(corsOptions))
    server.post("/Aapi", (req,res)=>{
      if(req.body.code==="Turing"||req.body.code==="TURING"||req.body.code==="turing"){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Called me")
        res.send(JSON.stringify({"status": 200, "error": null, "text": "go to MECH 404"}))
      }
      else{
        res.send(JSON.stringify({"status": 200, "error": null, "text": "The code entered is invalid"}))
      }
    });


    server.post("/Bapi", (req,res)=>{
      if(req.body.code==="Neumann"||req.body.code==="NEUMANN"||req.body.code==="neumann"){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Called me")
        res.send(JSON.stringify({"status": 200, "error": null, "text": "go to MECH 404"}))
      }
      else{
        res.send(JSON.stringify({"status": 200, "error": null, "text": "The code entered is invalid"}))
      }
    });


    server.post("/Capi", (req,res)=>{
      if(req.body.code==="Lovelace"||req.body.code==="LOVELACE"||req.body.code==="lovelace"){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Called me")
        res.send(JSON.stringify({"status": 200, "error": null, "text": "go to MECH 404"}))
      }
      else{
        res.send(JSON.stringify({"status": 200, "error": null, "text": "The code entered is invalid"}))
      }
    });



    server.post("/Dapi", (req,res)=>{
      if(req.body.code==="Torvalds"||req.body.code==="TORVALDS"||req.body.code==="torvalds"){
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Called me")
        res.send(JSON.stringify({"status": 200, "error": null, "text": "go to MECH 404"}))
      }
      else{
        res.send(JSON.stringify({"status": 200, "error": null, "text": "The code entered is invalid"}))
      }
    });


    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });