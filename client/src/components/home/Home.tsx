import React, { Component } from 'react';
import ServersSquares from '../serversSquares/ServersSquares';
import FilterPanel from "../filterPanel/filterPanel";
import Server from '../../models/Server';
import axios from 'axios';
import './home.css';


interface serversState {
    allServers : Server[];
    filteredServers : Server[];
    isActiveButtonPressed : boolean;
}

export default class Home extends Component <any, serversState> {

    constructor(props : any) {
        super(props);

        this.state = {
            allServers: new Array <Server> (),
            filteredServers : new Array <Server> (),
            isActiveButtonPressed : false
        };
    }

    componentDidMount = async () => {
        this.getAllServersFromServer();
    }

    changeActiveButtonStatus = () => {
        const newButtonStatus = !this.state.isActiveButtonPressed;
        this.setState({
            isActiveButtonPressed: newButtonStatus
        });
    }

    getAllServersFromServer = async () => {
        const serverResponse = await axios.get<Server[]>('http://localhost:3001/servers');
        const allServers: Server[] = serverResponse.data;
        this.setState({
            allServers: allServers,
            filteredServers: allServers
        });
    }

    filterServersInUI = (newFilteredServers: Server[]) => {
        this.setState({
            filteredServers: newFilteredServers
        });
    }

    updateFilteredServers = (serverDetails: Server) => {
        const updatedServerID = serverDetails.serverID;
        const indexOfUpdatedServer = this.state.filteredServers.findIndex(server => server.serverID === updatedServerID);
        const newFilteredServersArray = [...this.state.filteredServers];

        if (indexOfUpdatedServer !== -1) {
            newFilteredServersArray[indexOfUpdatedServer] = serverDetails;
        }

        this.setState({
            filteredServers: newFilteredServersArray
        });
    }


    render() {
        return (
            <div className="home">
                <FilterPanel filteredServers={this.state.filteredServers} filterServersInUI={this.filterServersInUI} allServers={this.state.allServers}
                    changeActiveButtonStatus={this.changeActiveButtonStatus} />
                <ServersSquares filteredServers={this.state.filteredServers} updateFilteredServers={this.updateFilteredServers} activeButtonStatus={this.state.isActiveButtonPressed}
                    filterServersInUI={this.filterServersInUI} />
            </div>
        )
    }
}