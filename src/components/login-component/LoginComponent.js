import React, { Component } from 'react'
import './LoginComponent.css'
import LoginInputComponent from './LoginInputComponent'

export default class LoginComponent extends Component {
    render() {
        return (
            <>
                <div className="flexWiHeCen">
                    <div className="lc1">
                        <img className="imglog rotateeffect" src="./img/1.jpg" alt="img"/>
                        <div className="loginpu">
                            <LoginInputComponent ></LoginInputComponent>
                        </div>                        
                    </div>
                </div>

                <div className="hc8">
                    <LoginInputComponent ></LoginInputComponent>
                </div>

            </>
        )
    }
}
