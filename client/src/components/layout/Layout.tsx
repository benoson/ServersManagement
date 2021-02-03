import React, { Component } from 'react';
import Home from '../home/Home';
import Header from '../header/Header';


export default class Layout extends Component {
    
    render() {
        return (
            <div className="layout">
                <Header />
                <Home />
            </div>
        )
    }
}