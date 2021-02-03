const express = require('express');
let serversLogic = require("../logic/servers-logic");

// creating a new Router object
const router = express.Router();


// ------------------------------ Handling The Servers's Related Requests ------------------------------ //

router.get('/', async (request, response, next) => {
    try {

        // Attempting to get all the servers
        const allServers = await serversLogic.getAllServers();

        // Sending the response as JSON to the client
        response.json(allServers);
    }

    catch (error) {
                
        // Handling the error with the Error Handler
        return next(error);
    }
});

router.put('/update_online_status/:id', async (request, response, next) => {

    // Extracting the selected server's ID from the URL, and getting the new data that needs to be updated

    let serverID = request.params.id;
    let newServerStatus = request.body.newServerStatus;

    try {
        // Attempting to update a server by the Admin
        const updatedServerOnlineStatus = await serversLogic.updateServerOnlineStatus(request, serverID, newServerStatus);
        
        // Responding with an empty response to the client, so the 'await' function will stop waiting on the client's side
        response.json(updatedServerOnlineStatus);
    }

    catch (error) {
        // Handling the error with our Error Handler
        return next(error);
    }
});


module.exports = router;