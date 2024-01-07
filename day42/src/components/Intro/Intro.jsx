import React from "react";
import './intro.css';
import hireMe from '../../img/hire.png';
// import bg from '../../img/bg.jpeg';

import {Link} from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Shristi<br /></span>Frontend Developer</span>
                <p className="introPara">I am a skilled web developer with experience in<br /> creating the websites.</p>
                <Link><button className="btn">
                     <img src={hireMe} alt="" className="btnImg"/>Hire Me</button></Link>
            </div>
            {/* <img src={bg} alt="photo" className="bg"/> */}

        </section>

    )
}

export default Intro;