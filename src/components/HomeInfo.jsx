import React from "react";
import { Link } from "react-router-dom";
import arrow from '../assets/icons/arrow.svg';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-lg text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" alt="arrow" />
        </Link>
    </div>
)

const rederContent = {
    1: (
        <h1 className="sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm <span className="font-semibold">Thisal</span>👋
            <br />
            A Software Engineer from Sri Lanka
        </h1>
    ),
    2: (
        <InfoBox text="Studied at the Software Engineering Degree and pickup many skills along the way" link="/about" btnText="Learn More" />
    ),
    3: (
        <InfoBox text="Led multiple projects to success over the years. Curious about the impact?" link="/projects" btnText="Visit my portfolio" />
    ),
    4: (
        <InfoBox text="Need a project done or looking for a dev? I'm just a few keystrokes away" link="/contact" btnText="Let's Talk" />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return rederContent[currentStage] || null;
}

export default HomeInfo;