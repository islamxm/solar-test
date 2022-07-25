import {useRef} from 'react';
import {useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import textureSrc from './textures/earth.jpg';

import { rotationAroundSun, rotation } from '../rotate';

const Earth = () => {
	const [texture] = useLoader(TextureLoader, [textureSrc])
	const planetRef = useRef()
	useFrame(({clock}) => {
		rotationAroundSun(planetRef.current, clock.oldTime, 365, 8);
		rotation(planetRef.current, 24, clock.oldTime)
	})
	return (
		<mesh castShadow={true} ref={planetRef} position={[8,0,0]}>
			<sphereGeometry args={[1, 32, 32]}/>
			<meshLambertMaterial clipShadows={true} map={texture}/>
		</mesh>
	)
	
}

export {Earth};