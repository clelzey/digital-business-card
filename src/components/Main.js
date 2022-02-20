import React from "react"
import profileImg from "../images/profile-pic.jpg"
import mailIcon from "../images/mail-icon.png"
import linkedInIcon from "../images/linkedIn-icon.png"

function Title() {
    return (
        <div className="title">
            <img className="title--profile-img" src={profileImg} alt="Woman in purple shirt" />
            <h1 className="title--name">Christy Elzey</h1>
            <p className="title--position">Frontend Developer</p>
            <a href="https://clelzey.github.io/resume/"
               className="title--website"
               target="_blank"
               rel="noopener noreferrer"
            >christyelzey.website</a>
        </div>
    )
}

function SocialBtns() {
    return (
        <div className="social-bts">
            <a className="btn" href="mailto:christyelzey@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mailIcon} alt=""/> Email</a>
            <a className="btn lnkIn-btn" href="https://www.linkedin.com/in/christy-elzey-ms-gist/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt=""/> LinkedIn</a>
        </div>
    )
}

function BioInfo() {
    return (
        <div className="bio-info">
            <h2 className="bio-info--title">About</h2>
            <p className="bio-info--text">I am a frontend developer with a particular interest in design and UI. I am always looking for new things to learn.</p>
            <h2 className="bio-info--title">Interests</h2>
            <p className="bio-info--text">Food expert. Reader. Internet enthusiast. Bacon buff. TV/Movie geek. GIS ninja. Coffee fanatic.</p>
        </div>
    )
}

function Main() {
    return (
        <main className="main--profile">
            <Title />
            <SocialBtns />
            <BioInfo />
        </main>
    )
}

export default Main