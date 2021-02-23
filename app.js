const express = require('express');
const app = express();
require('./db/conn');
const router = require('./router/router');
const Ranking = require("./models/olympics");


const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log(`Listening to port: ${port}`);
})

