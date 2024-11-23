const express = require("express");
const {PORT} = require('./configs/serverConfig')
const setupAndStartServer = async()=>{
    // create an express app
    const app = express();
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
        
    })
}
setupAndStartServer();