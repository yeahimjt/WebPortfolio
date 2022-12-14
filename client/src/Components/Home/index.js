import './index.scss';
import { useRef, useState, Suspense, useEffect,React } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Navbar from '../Nav';
import Modal from "../Modal";

import { Backdrop, useGLTF, OrbitControls, softShadows } from '@react-three/drei';
import {FaGithubSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';

softShadows();
function CoinLogo(props) {
    const { nodes, materials } = useGLTF('/coin.gltf')
    const group = useRef();
    useFrame(() => {
      group.current.rotation.y += 0.01;
    })
    return (
    
            <group  ref={group}{...props} dispose={null}>
                <mesh castShadow geometry={nodes.Cylinder.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, 0, 0]} scale={[1.34, 0.19, 1.34]} />
                <mesh castShadow geometry={nodes.Text.geometry} material={materials['Material.003']} position={[-0.33, -0.02, 0.16]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh castShadow geometry={nodes.Text001.geometry} material={materials['Material.003']} position={[-0.09, -0.47, 0.16]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh castShadow geometry={nodes.Text002.geometry} material={materials['Material.004']} position={[-1.01, -0.01, 0.14]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh castShadow geometry={nodes.Text003.geometry} material={materials['Material.004']} position={[-0.89, -0.1, 0.14]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh castShadow geometry={nodes.Text004.geometry} material={materials['Material.004']} position={[-1.04, -0.19, 0.14]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh castShadow geometry={nodes.Text005.geometry} material={materials['Material.004']} position={[0.15, -0.91, 0.16]} rotation={[Math.PI / 2, 0, 0]} />
                <mesh castShadow geometry={nodes.Cylinder001.geometry} material={materials['Material.003']} rotation={[Math.PI / 2, 0, 0]} scale={[1.34, 0.19, 1.34]} />
                <mesh castShadow geometry={nodes.Text006.geometry} material={materials['Material.004']} position={[0.8, 0.12, -0.12]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={-1} />
            </group>
        
    )
  }

function Home () {
    const [modalState, setModalState] = useState(false);

    return (
        <>
            <div id="home">
                <Navbar></Navbar>
                <div style={{position:"relative", top:"0px", left:"0px", width:"100vw", height:"100%"}}>
                <Canvas shadows camera={{position:[1,2,5]}} className="home-canvas">
                    <ambientLight position={[10,2,4]} intensity={20}/>
                    <directionalLight
                        castShadow
                        position={[15,5,8]}
                        intensity={10}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}/>

                    <CoinLogo className="coin-logo" position={[2.7,0.5,0.5]}/>

                    <pointLight position={[100,10,5]} intensity={5}/>
                    <pointLight position={[-100,-10,-5]} intensity={5}/>
                    <group>
                        <mesh receiveShadow rotation={[-Math.PI / 2,0,0]} position={[3,-1,3]}>
                            <planeBufferGeometry attach="geometry" args={[200,100]}/>
                            <shadowMaterial attach="material" opacity={0.1} color={'black'}/>
                        </mesh>
                    </group>

                </Canvas>
                </div>
                <div className="heading-container">
                    <div className="heading-content">
                        <h5>Hello, I'm</h5>
                        <h1>Jonathan Andrew Trevino</h1>
                        <h4 className="h4-text">Full Stack Software Developer/Engineer who is excited to deliver what you request</h4>
                            <button id="myBtn">
                            <a href="/contact"><p>Contact me</p></a>
                            </button>
                    </div>
                </div>

                <div className="skills-home-container">
                    <div className="skills-home-heading">
                        <h2>Skills I can deliver</h2>
                    </div>
                    <hr className="skills-bar"></hr>
                    <div className="skills-grid-container">
                        <div className="skills-grid-box">
                            React
                        </div>
                        <div className="skills-grid-box">
                            Node Js
                        </div>
                        <div className="skills-grid-box">
                            PHP
                        </div>
                        <div className="skills-grid-box">
                            Flask
                        </div>
                        <div className="skills-grid-box">
                            Python
                        </div>
                        <div className="skills-grid-box">
                            MySQL
                        </div>
                        <div className="skills-grid-box">
                            Java
                        </div>
                        <div className="skills-grid-box">
                            C
                        </div>
                    </div>
                    <div className="skills-cta">
                        <p>Want to view more?</p>
                        <a className="skills-home-link" href="/about">Click Here</a>
                    </div>
                </div>
                <div className="projects-home-container">
                    <div className="projects-ecommerce">
                        <h3 className="projects-ecommerce-header">To view my E-Commerce website utilizing <div className="highlight-container"><div className="highlight-text">Flask</div></div>, and <div className="highlight-container-2"><div className="highlight-text-2">Python</div></div></h3>
                        <button className="projects-ecommerce-btn"><a href="/projects" className="projects-btn">Click Here</a></button>
                    </div>
                    {/* <div className="projects-flutter">
                        <h3 className="projects-flutter-header">To view my Mobile Application utilizing <div className="highlight-container"><div className="highlight-text">Flutter</div></div></h3>
                        <button className="projects-flutter-btn"><a href="/projects" className="projects-btn">Click Here</a></button>
                        <div className="not-implemented">(Currently not implemented)</div>
                    </div> */}
                </div>

                <div className="heading-links">
                    <a className="heading-linkedin" target="_blank" rel="noreferrer" href="https://linkedin.com/in/jonathanandrewtrevino">
                        <div><BsLinkedin className="linkedin-icon"/></div>
                    </a>

                    <a className="heading-github" target="_blank" rel="noreferrer" href="https://github.com/yeahimjt?tab=repositories">
                        <div><FaGithubSquare className="github-icon"/></div>
                    </a>

                </div>
                
            </div>

        </>
    );
}

export default Home
