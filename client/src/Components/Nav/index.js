import './index.scss';

import React, {useState} from "react"
import {Link, NavLink, useLocation} from 'react-router-dom'
import Logo from '../../Assets/logo-2.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

    const [aTag, setATag] = React.useState("");

    const location = useLocation();
    React.useEffect(() => {
      if (window.location.pathname === "/about") {


      } else {

      }
    }, [location]);
    
    return (

    <div className="nav-bar">
        <Link className='logo' to='/'>
            </Link>
        <nav>
            <ul>
                <li>
                    <div className="nav-item">
                    <NavLink exact="true" activeclassname="activated" className="about" to="/">
                        <p style={{color: aTag}}>Home</p>
                    </NavLink>
                    </div>
                </li>
                <li>
                    <div className="nav-item">  
                    <NavLink exact="true" activeclassname="active" className="person" to="/about">
                        <p className="nav-item" style={{color: aTag}}>About me</p>
                    </NavLink>

                    </div>
                </li>
                <li>
                    <div className="nav-item">
                    <NavLink exact="true" activeclassname="active" className="project" to="/projects">
                        <p className="nav-item" style={{color: aTag}}>Projects</p>
                    </NavLink>

                    </div>
                </li>
                <li>
                    <div className="nav-item">
                    <NavLink exact="true" activeclassname="active" className="skills" to="/skills">
                        <p className="nav-item" style={{color: aTag}}>Skills</p>
                    </NavLink>

                    </div>
                </li>
                <li>
                    <div className="nav-item">
                    <NavLink exact="true" activeclassname="active" className="feed" to="/feedback">
                        <p className="nav-item" style={{color: aTag}}>Feedback</p>
                    </NavLink>
                    </div>
                </li>
            </ul>
            
        </nav>
        
    </div>
    );
}

export default Navbar;