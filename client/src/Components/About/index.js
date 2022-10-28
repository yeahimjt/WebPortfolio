import './index.scss'
import Navbar from '../Nav'
import aboutme_img from '../../Assets/aboutme.jpg'
import {useEffect,useState} from 'react';
import Loading from '../Load/Load'
const About = () =>  {


    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        
        }, 1250);
  })

    return (

        
        <>
           
            <div id="about">
                <Navbar></Navbar>
                <div className="about-container">
                    <img className="aboutme_img" src={aboutme_img} alt="About me"></img>
                    <h2 className="about-heading">Jonathan Andrew Trevino</h2>
                    <h5 className="about-subheading">Full Stack Software Developer/Engineer</h5>
                    <p className="about-text">Passionate about Full stack development, and the knowledge that can be absorbed with working with all aspects that come with software development.
                        I enjoy being able to express my creativity with the projects I set
                        in front of myself and being able to see the final outcome. Eager to experience life as a Software Engineer and ready to overcome the obstacles that may appear.
                    </p>
                </div> 
                <div className="skills-container">
                
                    <h5 className="skills-heading">My Skills</h5>
                    <div className="skills-boxes">
                        <div className="skills-languages">
                            <div className="languages-header">
                                <p>Languages</p>
                            </div>
                        </div>
                        <div className="skills-frameworks">
                            <div className="frameworks-header">
                                <p>Frameworks</p>
                            </div>
                        </div>
                    </div>


                    
                </div> 
                <div className="spotify">
                    <p>Currently listening to</p>
                </div>
            </div>
            
        </>
    )



}



export default About