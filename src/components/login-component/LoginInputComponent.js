import React, { Component } from 'react'
import './LoginComponent.css'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

export default class LoginInputComponent extends Component {
    render() {
        return (
            <div>
                <div className="righted mnhead">
                    <b>Login</b>
                </div>
                <div>
                    <PersonOutlineOutlinedIcon />
                    <input className="lg_in" placeholder="Username/Email"></input>
                </div>
                <div>
                    <VpnKeyOutlinedIcon />
                    <input className="lg_in" placeholder="Password"></input>
                </div>
                <div className="righted">
                    <button className="btn1 btn2">Go</button>
                </div>
            </div>
        )
    }
}
