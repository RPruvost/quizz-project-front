import React, { Component } from 'react'
import Image from "../assets/quipo.png"
import '../App.css'

export class Nav extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <img src={Image} alt="logo" className="banner__img"/>
                </div>
            </div>
        )
    }
}

export default Nav
