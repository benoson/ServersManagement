import React, { useState } from 'react';
import Server from '../../models/Server';
import axios from 'axios';
import serverImage from '../../assets/server_logo.png';
import './serverComponent.css';


export default function ServerComponent({serverDetails, updateFilteredServers, activeButtonStatus, onOnlineStatusChanged} : any) {
    
    // Setting the state of the component => The state is the Online Status of the currect Server
    const [isServerOnline, changeServerOnlineStatus] = useState(serverDetails.serverOnlineStatus);

    const onOnlineStatusChange = async (serverDetails : Server) => {

        const serverID = serverDetails.serverID;
        const newServerStatus = !isServerOnline;
        await axios.put(`http://localhost:3001/servers/update_online_status/${serverID}`, {newServerStatus});
        changeServerOnlineStatus(newServerStatus);

        serverDetails.serverOnlineStatus = newServerStatus;
        updateFilteredServers(serverDetails);

        // if the current display is by the active servers, than, sort them and show only the active ones
        if (activeButtonStatus) {
            onOnlineStatusChanged();
        }
    }

    // Generating an element key for each time the component renders - this is for React's Diff Algorithm
    const generateNewElementKey = () => {
        let randomKey = Math.random() * 99999;
        return randomKey;
    }


    return (
        <div className="serverSquare">
            <div className="serverSquareLeft">
                <div className="serverImageDiv">
                    <img src={serverImage} alt="server's image" className="serverImage"/>
                </div>
            </div>

            <div className="serverSquareCenter">
                <span><b>Name:</b> {serverDetails.serverName}</span>
                <span><b>IP:</b> {serverDetails.serverIP}</span>
                <span><b>Hosting Company:</b> {serverDetails.serverHostingCompany}</span>
                <span><b>Time of Creation:</b> {serverDetails.serverCreationTime}</span>
            </div>

            <div className="serverSquareRight">
                <span>Online Status</span>
                <input key={generateNewElementKey()} type="checkbox" onChange={() => {onOnlineStatusChange(serverDetails)}} defaultChecked={isServerOnline} />
            </div>
        </div>
    )
}