import './index.scss'
import Navbar from '../Nav'
import aboutme_img from '../../Assets/aboutme.jpg'
const About = () =>  {
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
                        in front of myself and being able to see the final outcome. Passionate about Full stack development, and the knowledge that can be absorbed with working with all aspects that come with software development.
                        I enjoy being able to express my creativity with the projects I set
                        in front of myself and being able to see the final outcome. Passionate about Full stack development, and the knowledge that can be absorbed with working with all aspects that come with software development.
                        I enjoy being able to express my creativity with the projects I set
                        in front of myself and being able to see the final outcome. 
                    </p>
                </div> 
                
            </div>
        </>
    )



}



export default About