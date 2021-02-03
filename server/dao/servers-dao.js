let connection = require("./connection-wrapper");
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");


const getAllServers = async () => {

    // Creating the SQL query using Aliases, to get better variables names

    const SQL = `SELECT
                    server_ID as serverID,
                    server_name as serverName,
                    server_IP as serverIP,
                    server_online_status as serverOnlineStatus,
                    (select company_name from servers_companies where company_id = server_hosting_company) as serverHostingCompany,
                    DATE_FORMAT(server_creation_time, '%d/%m/%Y') as serverCreationTime
                FROM
                    servers`;

    try {

        // Sending the SQL query to the 'connection wrapper' preset
        const allServers = await connection.execute(SQL);

        // In case the procedure went well, and we got back data from the DB
        return allServers;
    }

    catch (error) {
        
        // Technical Error
        throw new ServerError(ErrorType.GENERAL_ERROR, SQL, error);
    }
}

const updateServerOnlineStatus = async (serverID, newServerStatus) => {

    const SQL = `UPDATE servers
                    SET server_online_status = ?
                    WHERE server_ID = ?`;

    const parameters = [newServerStatus, serverID];

    try {

        // Sending the SQL queries and the parameters to the 'connection wrapper' preset
        await connection.executeWithParameters(SQL, parameters);
    }

    catch (error) {
        // Technical Error
        throw new ServerError(ErrorType.GENERAL_ERROR, SQL, error);
    }
}
    
module.exports = {
    getAllServers,
    updateServerOnlineStatus
};