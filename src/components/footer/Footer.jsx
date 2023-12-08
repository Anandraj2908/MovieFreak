import React from "react";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHashnode,FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="opacity-layer"></div>
            <ContentWrapper>
                
                <h2 className="infoText">
                    A React project by NIRVAN Technologies
                </h2>
                <div className="socialIcons">
                    
                    <span className="icon">
                        <Link to={"https://www.linkedin.com/in/anand-raj-490105216/"}>
                            <FaLinkedin />
                        </Link>
                    </span>
                    <span className="icon">
                        <Link to={"https://github.com/Anandraj2908"}>
                        <FaGithub  />
                        </Link>
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
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                
                <div className="">
                    <h5>Made with ♥ by Anand Raj</h5>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
