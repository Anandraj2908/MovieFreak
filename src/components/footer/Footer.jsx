import React from "react";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHashnode,FaMedium } from "react-icons/fa6";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                
                <h2 className="infoText">
                    A React project by Anand Raj
                </h2>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="socialIcons">
                    
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    <span className="icon">
                        <FaGithub />
                    </span>
                    <span className="icon">
                        <FaMedium />
                    </span>
                    <span className="icon">
                        <FaHashnode />
                    </span>
                    <span className="icon">
                        <SiLeetcode />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
