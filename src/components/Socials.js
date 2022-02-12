import React from "react"
import twitterIcon from "../images/Twitter-Icon.png"
// import facebookIcon from "../images/Facebook-Icon.png"
import instagramIcon from "../images/Instagram-Icon.png"
import githubIcon from "../images/GitHub-Icon.png"


function Socials() {
    return (
        <div className="socials">
            <div className="socials--icons">
                <a className="socials--icon" href="https://twitter.com/codeMuse2" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="" />
                </a>
                {/*<a className="socials--icon" href="#" target="_blank" rel="noopener noreferrer">*/}
                {/*    <img src={facebookIcon} alt="" />*/}
                {/*</a>*/}
                <a className="socials--icon" href="https://www.instagram.com/asteriastravels/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="" />
                </a>
                <a className="socials--icon" href="https://github.com/clelzey" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="" />
                </a>
            </div>
            <p className="copyright">© 2022 Christy Elzey</p>
        </div>
    )
}

export default Socials