import React, {useEffect, useState} from 'react'
import './index.scss'
import Navbar from '../Nav'
import {FaGithubSquare} from 'react-icons/fa'
import axios from "axios";
import {BiLinkExternal} from 'react-icons/bi'
import ecommerce from '../../Assets/nerd4u.png'
import {faExpand} from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal'
import {AiOutlineMail} from 'react-icons/ai'

function Projects () {
    const [modalState, setModalState] = useState(false);
    
    return(
        <>
        <div id="projects">

            <Navbar/>
            <div className="bubble-div">
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                    <div className="bubble-items"></div>
                </div>
            <div className="project-wrapper">
                <div className="project-row">
                    
                    <div className="project-item">
                        <div className="image-container"><img className="nerd4u" src={ecommerce} alt="Nerd4U Project"></img></div>   
                        <div className="links">
                            <a href="https://github.com/yeahimjt/Group-7-Project" target="_blank" alt="See the code" rel="noreferrer"><FaGithubSquare className="card-github"/></a>
                            <BiLinkExternal className="card-link"/>

                        </div>
                        <h6 className="card-header">E-Commerce Website</h6> 
                        <p className="card-content">Created a Flask Web Application utilizing Html, Css, Javascript, Python, and Bootstrap.
                        Learned how to store, edit, and delete data stored on a MySQL database from a website. Functionally worked similar to Amazon but specifically sold items such as comic books, and figurines.</p>
                    </div>
                    <div className="project-item">
                        <div className="image-container"></div>   
                        <div className="links">
                            <FaGithubSquare className="card-github unavailable"/>
                            <BiLinkExternal className="card-link"/>
                        </div>
                        <h6 className="card-header" >Flutter Application</h6> 
                        <p className="card-content">Currently in development. Creating a Flutter mobile app for a fictional hotel booking service called BookFive.</p>
                    </div>
                    
                </div>
                
            </div>

        
        </div>  


        </>
    );
}

export default Projects;