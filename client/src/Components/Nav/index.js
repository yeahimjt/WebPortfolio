import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../Assets/logo-2.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {FaGithubSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'


const Navbar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            </Link>
        <nav>
            <ul className="h">
                <li>
                    <NavLink exact="true" activeclassname="active" className="about" to="/">
                        <FontAwesomeIcon icon={faHome} className="about-icon"></FontAwesomeIcon>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" activeclassname="active" className="person" to="/about">
                        <FontAwesomeIcon icon={faUser} className="person-icon"></FontAwesomeIcon>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" activeclassname="active" className="project" to="/projects">
                    <FontAwesomeIcon icon={faFolder} className="project-icon"></FontAwesomeIcon>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" activeclassname="active" className="demo" to="/demos">
                    <FontAwesomeIcon icon={faLaptopCode} className="demo-icon"></FontAwesomeIcon>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" activeclassname="active" className="feed" to="/feedback">
                        <FontAwesomeIcon icon={faStar} className="feedback-icon"></FontAwesomeIcon>
                    </NavLink>
                </li>
            </ul>
            
        </nav>
        <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/jonathanandrewtrevino"><BsLinkedin className="linkedin-icon"/></a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/yeahimjt?tab=repositories"><FaGithubSquare className="github-icon"/></a>
                </li>
            </ul>
    </div>
)

export default Navbar;