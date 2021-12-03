import React from "react"
import portrait from "../images/portrait.jpg";
import { FaEnvelope } from "react-icons/fa";

function Info() {
    return (
        <div className="info">
            <div className="portrait">
                <img src={portrait} alt="self portrait" />
            </div>
            <div className="name">
                <h1>Stason Fox</h1>
            </div>
            <div className="title">
                <h2>Software Engineer</h2>
            </div>
            <div className="email">
                <button><span className="email-icon"><FaEnvelope /></span>Email</button>
            </div>
        </div>
    );
}

export default Info;