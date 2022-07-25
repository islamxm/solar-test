import {useRef} from 'react';
import {useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import textureSrc from './textures/sun.jpg';
import { rotation } from '../rotate';


const Sun = () => {
	const [texture] = useLoader(TextureLoader, [textureSrc])
    const planetRef = useRef();
	useFrame(({clock}) => {
		rotation(planetRef.current, 500, clock.oldTime)
	})

   
	return (
		<mesh ref={planetRef} position={[0,0,0]}>
			<sphereGeometry args={[2, 32, 32]}/>
			<meshBasicMaterial map={texture}/>
		</mesh>
	)
	
}

export {Sun};