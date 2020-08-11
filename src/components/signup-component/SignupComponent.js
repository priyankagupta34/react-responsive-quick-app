import React, { Component } from 'react'
import './SignupComponent.css'
import SignupInputComponent from './SignupInputComponent'

export default class SignupComponent extends Component {
    render() {
        return (
            <div>
                <div className="flexWiHeCen">
                    <div className="lc1">
                        <img className="imglog rotateeffect" src="./img/1.jpg" alt="img" />
                        <div className="loginpu">
                            <SignupInputComponent ></SignupInputComponent>
                        </div>
                    </div>
                </div>
                
                <div className="hc8">
                    <SignupInputComponent ></SignupInputComponent>
                </div>
            </div>
            
        )
    }
}
