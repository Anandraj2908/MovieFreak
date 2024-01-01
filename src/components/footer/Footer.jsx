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
                   
                </div>
                
                
                <div className="">
                    <h5>Made with ♥ by Anand Raj</h5>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
