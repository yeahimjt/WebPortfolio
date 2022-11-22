import './index.scss';

import React, {useRef, useState} from "react"
import {Link, NavLink, useLocation} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faHome,faUserTie,faFolder,faAddressCard} from '@fortawesome/free-solid-svg-icons'
import Logo from '../../Assets/logo-2.svg'




const Navbar = () => {

    const [aTag, setATag] = useState("");

    const location = useLocation();
    React.useEffect(() => {
      if (window.location.pathname === "/") {

        
      } 
      else {
        
      }
    }, [location]);
    
    return (

    <div className="nav-bar">
        <Link className='logo' to='/'>
            </Link>
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="checkbtn">
            <FontAwesomeIcon icon={faBars}/>
        </label>

        <nav>
            <ul>
                <li>
                    <div className="nav-item">
                    <NavLink exact="true" activeClassName="active"  to="/">
                        <div className="nav-text">
                            <p style={{color: aTag}}>Home</p>
                        </div>
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={faHome}/>
                        </div>
                       
                    </NavLink>
                    </div>
                </li>
                <li>
                    <div className="nav-item">  
                    <NavLink exact="true" activeClassName="active"  to="/about">
                        <div className="nav-icon">
                                <FontAwesomeIcon icon={faUserTie}/>
                        </div>
                        <div className="nav-text">
                        <p className="nav-item" style={{color: aTag}}>About me</p>
                        </div>
                    </NavLink>

                    </div>
                </li>
                <li>
                    <div className="nav-item">
                    <NavLink exact="true" activeClassName="active"  to="/projects">
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={faFolder}/>
                        </div>
                        <div className="nav-text">
                        <p className="nav-item" style={{color: aTag}}>Projects</p>
                        </div>
                    </NavLink>

                    </div>
                </li>
                <li>
                    <div className="nav-item">
                    <NavLink exact="true" activeClassName="active" to="/contact">
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={faAddressCard}/>
                        </div>
                        <div className="nav-text">
                            <p className="nav-item" style={{color: aTag}}>Contact</p>
                        </div>
                    </NavLink>

                    </div>
                </li>
            </ul>
            
        </nav>
        
    </div>
    );
}

export default Navbar;