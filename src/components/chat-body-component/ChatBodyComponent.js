import React, { Component } from 'react';
import './ChatBodyComponent.css';

const chatServer = new WebSocket('ws://localhost:8000/ws');

export default class ChatBodyComponent extends Component {

    componentDidMount() {

        chatServer.onopen = function () {
            console.log("Opening a connection...");
        };

        // setTimeout(() => {
        //     chatServer.send('hi');
        // }, 1000);

        chatServer.onmessage = function (event) {
            console.log('event.data', event.data);
        }
    }

    sendMes() {
        chatServer.send('hi');
    }
    render() {
        return (
            <div>
                <button onClick={this.sendMes.bind(this)}>Click me to send</button>
            </div>
        )
    }
}
