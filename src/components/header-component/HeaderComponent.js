import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PackageJson from './../../../package.json';
import './HeaderComponent.css';

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        }
    }

    openMenuForSm() {
        this.setState({
            ...this.state,
            openMenu: true
        });

    }

    closeMenuForSm() {
        const id = window.document.getElementById('hc1');
        id.classList.add('slideOutFromLeft')
        setTimeout(() => {
            id.classList.remove('slideOutFromLeft');
            this.setState({
                ...this.state,
                openMenu: false
            })
        }, 490);

    }

    render() {
        const { openMenu } = this.state;
        return (
            <div>

                <div className="hc1">
                    <div className="hc_bt_ar">
                        <Link
                            to="/login"
                        ><button className="btn1 btn3" >Login</button></Link>
                        <Link
                            to="/signup"
                        ><button className="btn1 btn3">Signup</button></Link>
                        <Link
                            to="/contact"
                        ><button className="btn1 btn3">Contact</button></Link>
                    </div>
                </div>

                {/* For Smaller view */}
                <div className="hc_sm">
                    <div className="hc4">
                        <MenuIcon className="menubtn" style={{ fontSize: '2em' }}
                            onClick={this.openMenuForSm.bind(this)} ></MenuIcon>
                        <img className="imglogsmall" src="./img/1.jpg" alt="img" ></img>
                    </div>
                    {openMenu && <div className="hc3 slideInFromLeft " id="hc1">

                        <div className=" hc7">
                            <div>
                                <div className="hc5 righted">
                                    <MenuOpenIcon className="menubtn" style={{ fontSize: '3em' }} onClick={this.closeMenuForSm.bind(this)} />
                                </div>
                                <div className="hc6">
                                    <Link to="/login" ><button className="btn1" onClick={this.closeMenuForSm.bind(this)}>Login</button></Link>
                                    <br />
                                    <Link to="/signup"><button className="btn1" onClick={this.closeMenuForSm.bind(this)}>Signup</button></Link>
                                    <br />
                                    <Link to="/contact"><button className="btn1" onClick={this.closeMenuForSm.bind(this)}>Contact</button></Link>
                                </div>
                                <div className="hc9"></div>
                                <div className="hc10">
                                    <small className="ver">VERSION: {PackageJson.version}</small>
                                    <br ></br>
                                    <br ></br>
                                    <small>Made with <span role="img" aria-label="heart emoji"> &#10084;&#65039;</span></small>
                                    <br ></br>
                                    <small>By</small>
                                    <br ></br>
                                    <small>Priyanka</small>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>


            </div>
        )
    }
}
