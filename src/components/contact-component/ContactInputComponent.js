import React, { Component } from 'react'
import './ContactComponent.css'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

export default class ContactInputComponent extends Component {
    render() {
        return (
            <div>
                <a href="tel:+917903365508">
                    <div className="cc2">
                        <PhoneOutlinedIcon />
                        <span> +91 7903365508</span>
                    </div>
                </a>
                <a href="mailto:34priyankagupta@gmail.com">
                    <div className="cc2">
                        <EmailOutlinedIcon />
                        <span> 34priyankagupta@gmail.com</span>
                    </div>
                </a>
                <textarea className="lg_in"></textarea>
                <div className="righted">
                    <button className="btn1 btn4">Send</button>
                </div>
            </div>
        )
    }
}
