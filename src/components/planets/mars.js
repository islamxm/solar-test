import {useRef, useState} from 'react';
import {useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import textureSrc from './textures/mars.jpg';
import { rotationAroundSun, rotation } from '../rotate';


const Mars = () => {
	const [texture] = useLoader(TextureLoader, [textureSrc])
	const planetRef = useRef();
	useFrame(({clock}) => {
		rotationAroundSun(planetRef.current, clock.oldTime, 687, 5);
		rotation(planetRef.current, 23, clock.oldTime)
	})

	return (
		<>
			<mesh castShadow={true} ref={planetRef} position={[5,0,0]}>
				<sphereGeometry args={[.7, 32, 32]}/>
				<meshLambertMaterial clipShadows={true} map={texture}/>
			</mesh>
		</>
		
	)
	
}

export {Mars};
