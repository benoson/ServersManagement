const serversDao = require('../dao/servers-dao');
const ServerError = require('../errors/server-error');
const ErrorType = require("../errors/error-type");


// -------------- Server's Server Logic Functions -------------- //

const getAllServers = async () => {

    // Retrieving all the vacations from the DAO preset
    const allServers = await serversDao.getAllServers();
    return allServers;
}

const updateServerOnlineStatus = async (request, serverID, newServerStatus) => {
    await serversDao.updateServerOnlineStatus(serverID, newServerStatus);
}


module.exports = {
    getAllServers,
    updateServerOnlineStatus
};