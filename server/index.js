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
    server.post("/api", (req,res)=>{
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Called me")
        res.send(JSON.stringify({"status": 200, "error": null, "text": "go to MECH 404"}))
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