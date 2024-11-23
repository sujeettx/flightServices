const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./configs/serverConfig');
const setupAndStartServer = async()=>{
    // create an express app
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}))
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
        
    })
}
setupAndStartServer();