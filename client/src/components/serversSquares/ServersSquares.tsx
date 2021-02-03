import React from 'react';
import Server from '../../models/Server';
import ServerComponent from '../serverComponent/ServerComponent';
import './serversSquares.css';

export default function ServersSquares({filteredServers, updateFilteredServers, activeButtonStatus, filterServersInUI} : any) {

    // Generating an element key for each time the component renders - this is for React's Diff Algorithm
    const generateNewElementKey = () => {
        let randomKey = Math.random() * 99999;
        return randomKey;
    }

    const onOnlineStatusChanged = () => {
        const sortedServersByActive: Server[] = filteredServers.filter((server: Server) => server.serverOnlineStatus == true);
        filterServersInUI(sortedServersByActive);
    }

    return (
        <div className="serversSquaresSection" key={generateNewElementKey()}>
            <div className="squaresHeaderDiv">
                <h2>Servers</h2>
            </div>
            <div className="allServersSquares">
                {filteredServers.map( (server : Server, index : number) => 
                    <div key={index}>
                        <ServerComponent serverDetails={server} updateFilteredServers={updateFilteredServers} activeButtonStatus={activeButtonStatus} onOnlineStatusChanged={onOnlineStatusChanged} />
                    </div>
                )}
            </div>
        </div>
    )
}