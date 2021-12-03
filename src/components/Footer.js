import React from "react"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <a className="linkedin-icon" href="https://www.linkedin.com/in/stasonfox">
                <FaLinkedin />
            </a>
            <a className="github-icon" href="https://github.com/stason-fox">
                <FaGithubSquare />
            </a>
        </div>
    )
}

export default Footer;