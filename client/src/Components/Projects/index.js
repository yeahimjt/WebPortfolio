import React from 'react'
import './index.scss'
import Navbar from '../Nav'
import {FaGithubSquare} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'
import ecommerce from '../../Assets/nerd4u.png'
import {faExpand} from '@fortawesome/free-solid-svg-icons'
function Projects () {
    return(
        <>
        <div id="projects">
            <Navbar/>
            <div className="project-wrapper">
                <div className="project-row">
                    <div className="project-item">
                        <div className="temporary"></div>   
                        <div className="links">
                            <a href="hello" alt="See the code"><FaGithubSquare className="card-github"/></a>
                        <a href="hi" alt="See a live demo"><BiLinkExternal className="card-link"/></a>
                        </div>
                        <h6 className="card-header">Database manipulation</h6> 
                        <p className="card-content">Created a Java program to connect to MySQL database to query data for specific results.</p>
                    </div>
                    <div className="project-item">
                        <div className="temporary"><img className="nerd4u" src={ecommerce} alt="Nerd4U Project"></img></div>   
                        <div className="links">
                            <a href="https://github.com/yeahimjt/Group-7-Project" target="_blank" alt="See the code" rel="noreferrer"><FaGithubSquare className="card-github"/></a>
                        <a href="hi" alt="See a live demo"><BiLinkExternal className="card-link"/></a>
                        </div>
                        <h6 className="card-header">E-Commerce Website</h6> 
                        <p className="card-content">Created a Flask Web Application utilizing Html, Css, Javascript, Python, and Bootstrap.
                        Learned how to store, edit, and delete data stored on a MySQL database from a website. Functionally worked similar to Amazon but specifically sold items such as comic books, and figurines.</p>
                    </div>
                    <div className="project-item">
                        <div className="temporary"></div>   
                        <div className="links">
                            <a href="hello" alt="See the code"><FaGithubSquare className="card-github"/></a>
                        <a href="hi" alt="See a live demo"><BiLinkExternal className="card-link"/></a>
                        </div>
                        <h6 className="card-header">Flutter Application</h6> 
                        <p className="card-content">...</p>
                    </div>
                    
                </div>

                

                
                
            </div>
        </div>  
        </>
    );
}

export default Projects;