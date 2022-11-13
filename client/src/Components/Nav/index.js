import './index.scss';

import React, {useRef, useState} from "react"
import {Link, NavLink, useLocation} from 'react-router-dom'
import Logo from '../../Assets/logo-2.svg'




const Navbar = () => {

    const [aTag, setATag] = useState("");

    const location = useLocation();
    React.useEffect(() => {
      if (window.location.pathname === "/about") {
        setATag("orange");
        
      } else {
        setATag("#F2294E");
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
                    <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
                        <p className="nav-item" style={{color: aTag}}>Contact</p>
                    </NavLink>

                    </div>
                </li>
            </ul>
            
        </nav>
        
    </div>
    );
}

export default Navbar;