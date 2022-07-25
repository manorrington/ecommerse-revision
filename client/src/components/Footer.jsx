import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                    <div>
                        <div className="footer__title">
                        greatRecords &copy; 2022 
                        </div>
                    </div>
                   
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer