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
                <div style={{position:"relative", top:"0", left:"0", width:"100vw", height:"100%"}}>
                <Canvas shadows camera={{position:[1,2,5]}} className="home-canvas">
                    <ambientLight position={[10,2,5]} intensity={0.3}/>
                    <directionalLight 
                        castShadow
                        position={[-10,10,10]}
                        intensity={12}
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
                        <mesh receiveShadow rotation={[-Math.PI / 2,0,0]} position={[1,-3,0.5]}>
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
                        <h4 className="h4-text">Full Stack Software Developer/Engineer</h4>
                            <a href="/contact"><button id="myBtn">
                                <p>Contact me</p>
                            </button></a>
                        
                    </div>
                    
                </div>
                {modalState && <Modal closeModal={setModalState}/>}
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