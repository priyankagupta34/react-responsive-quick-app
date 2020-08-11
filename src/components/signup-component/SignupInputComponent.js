import React, { Component } from 'react'
import './SignupComponent.css'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

export default class SignupInputComponent extends Component {
    render() {
        return (
            <div>
                <div className="righted mnhead">
                    <b>Signup</b>
                </div>
                <div>
                    <PersonOutlineOutlinedIcon />
                    <input className="lg_in" placeholder="Username"></input>
                </div>
                <div>
                    <EmailOutlinedIcon />
                    <input className="lg_in" placeholder="Email"></input>
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
