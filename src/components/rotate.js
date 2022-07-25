export const  rotationAroundSun = (planet, time, period, rotationRadius) => {
	const deg = -((time / 10 / period) % 360);
  
	const x = rotationRadius * Math.cos(deg);
	const y = rotationRadius * Math.sin(deg);
  
	planet.position.set(x, 0, y);
};

export const rotation = (planet, period, time) => {
	planet.rotation.y = -(time / 10 / period);
};