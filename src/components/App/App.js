import './App.scss';
import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Earth } from '../planets/earth';
import { Sun } from '../planets/sun';
import { Mars } from '../planets/mars';
import { Galaxy } from '../planets/galaxy';

import { PerspectiveCamera } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei/core';
// import { inSphere } from "maath/random";
// const CameraController = () => {
//     const {camera, gl} = useThree();

    
    
//     useEffect(() => {
//         camera.position.set(0 ,3, 10)
//         const controls = new OrbitControls(camera, gl.domElement);
        
//         controls.minDistance = 5;
//         controls.maxDistance = 50;
//         controls.autoRotate = true;

//         return () => {
//             controls.dispose();
//         }
//     }, [camera, gl]);
    

//     return null;
// }


const App = () => {

    return (
        <div className="App">
            <div id="solar">
                <Suspense>
                    <Canvas>

                        {/* <CameraController /> */}
                        <OrbitControls minDistance={5} maxDistance={50} autoRotate={true} autoRotateSpeed={.5} rotateSpeed={.2}/>
                        <PerspectiveCamera position={[0,0,10]} makeDefault/>

                        <ambientLight intensity={0.05}/>
                        <pointLight intensity={1} position={[0, 0, 0]} color={'#fff'}/>
                        

                        {/* galaxy */}
                        <Galaxy/>

                        {/* sun */}
                        <Sun/>

                        {/* earth */}
                        <Earth/>

                        {/* Mars */}
                        <Mars/>

                    </Canvas>  
                </Suspense>
                
            </div>
        </div>
    )
}

export default App;