const express = require("express");

const setupAndStartServer = async()=>{
    // create an express app
    const app = express();
    const PORT = 5000;
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
        
    })
}
setupAndStartServer();