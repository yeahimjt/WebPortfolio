import './index.scss'
import Navbar from '../Nav'
import aboutme_img from '../../Assets/aboutme.jpg'
import React, {useEffect,useState, useRef} from 'react';
import {DiJava,DiPython,DiHtml5, DiCss3, DiJavascript, DiJavascript1, DiPhp, DiReact, DiGithub, DiMysql} from 'react-icons/di';
import {SiFlask} from 'react-icons/si'
import {TbBrandPhp} from 'react-icons/tb'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Collapsible from '../Collapsible';
import albumCover from '../../Assets/album-cover.jpeg'
import Modal from '../Modal'
import {AiOutlineMail} from 'react-icons/ai'
const About = () =>  {


    const [modalState, setModalState] = useState(false);
    
  
    return (
        
        <>
            <div id="about">
                <Navbar></Navbar>
               

                <div className="bubble-div">
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                </div>

                <div className="about-container">
                    <div className="about-inner">
                        <img className="aboutme_img" src={aboutme_img} alt="About me"></img>
                        <h2 className="about-heading">Jonathan Andrew Trevino</h2>
                        <h5 className="about-subheading">Full Stack Software Developer/Engineer</h5>
                        <p className="about-text">Passionate about Full stack development, and the knowledge that can be absorbed with working with all aspects that come with software development.
                            I enjoy being able to express my creativity with the projects I set
                            in front of myself and being able to see the final outcome.
                        </p>
                    </div> 
                </div>
                    <div className="skills-title">
                            <h2>SKILLS</h2>
                    </div>
                    <div className="collapse-container">
                    <div className="collapse">
                        
                        <div className="languages-collapse">
                            <Collapsible className="languages" title="Languages">
                                <div className="languages-content-container">
                                    <div className="box">
                                        <DiJava className="java-icon"></DiJava>
                                        Java
                                    </div>                                    
                                    <div className="box">
                                        C
                                    </div>                                    
                                    <div className="box">
                                        <DiPython className="python-icon"></DiPython>    
                                        Python
                                    </div>                                    
                                    <div className="box">
                                        <DiHtml5 className="html-icon"></DiHtml5>    
                                        HTML
                                    </div>                                   
                                    <div className="box">
                                        <DiCss3 className="css-icon"></DiCss3>    
                                        CSS
                                    </div>                                  
                                    <div className="box">
                                        <DiJavascript1 className="javascript-icon"></DiJavascript1>    
                                        JavaScript
                                    </div>                                    
                                    <div className="box">
                                        <TbBrandPhp className="php-icon"></TbBrandPhp>    
                                        PHP
                                    </div>   
                                    <div className="box">
                                        <DiMysql className="php-icon"></DiMysql>    
                                        MySql
                                    </div>                                                                     
                                </div>
                            </Collapsible>
                        </div>
                        <div className="frameworks-collapse">
                            <Collapsible className="frameworks" title="Frameworks">
                                <div className="frameworks-content-container">
                                    <div className="box">
                                        <SiFlask className="java-icon"></SiFlask>
                                        Flask
                                    </div>                                    
                                    <div className="box">
                                        <DiReact className="java-icon"></DiReact>
                                        React
                                    </div>   
                                    <div className="box">

                                        Node Js
                                    </div>                                   
                                </div>
                            </Collapsible>
                        </div>
                        <div className="applications-collapse">
                            <Collapsible className="languages" title="Applications">
                            <div className="applications-content-container">
                                    <div className="box">
                                        <DiGithub className="java-icon"></DiGithub>
                                        Github
                                    </div>                                    
                            </div>
                            </Collapsible>
                        </div>
                    </div>
                </div>
                    
                <div className="spotify">
                    <div album-container>
                        <img src={albumCover} className="album-cover"></img>
                    </div>
                    <div className="right-container">
                        <div className="top-section">
                            <h2>Currently Listening To</h2>
                            <div className="playing-icon">
                                <div className="bar-1"></div>
                                <div className="bar-2"></div>
                                <div className="bar-3"></div>
                                <div className="bar-4"></div>
                                <div className="bar-5"></div>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <p className="title-artist">Colors and Shapes - Mac Miller</p>
                            <div className="play-bar"><div className="progress"></div></div>
                            <div className="timestamps">
                                <p>0:00</p>
                                <p>5:31</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    )



}



export default About