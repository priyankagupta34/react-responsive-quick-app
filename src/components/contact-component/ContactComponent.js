import React, { Component } from 'react'
import './ContactComponent.css'
import ContactInputComponent from './ContactInputComponent';

export default class ContactComponent extends Component {
    render() {
        return (
            <>
                <div className="cc1">
                    <ContactInputComponent />
                </div>
                
                <div className="cc3">
                    <ContactInputComponent />
                </div>

            </>
        )
    }
}
