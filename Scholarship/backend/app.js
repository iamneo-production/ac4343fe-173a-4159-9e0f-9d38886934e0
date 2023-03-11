const express = require("express");
require("./dbConfig/db");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router  = require("./routers");
  
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors());
app.get("/", (req, res) => { return res.status(200).send("Hi,the API is working."); });
app.use(router);

const PORT = process.env.port || 4200;
app.listen(PORT, ()=>{
    console.log(`Server has been listing on ${PORT}`);
})