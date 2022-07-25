import {useRef} from 'react';
import {useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import textureSrc from './textures/galaxy.jpg';


const Galaxy = () => {
	const [texture] = useLoader(TextureLoader, [textureSrc])
    const planetRef = useRef();

	return (
		<mesh ref={planetRef} position={[0,0,0]}>
			<sphereGeometry args={[50, 100, 100]}/>
			<meshBasicMaterial side={1} map={texture}/>
		</mesh>
	)
	
}

export {Galaxy};