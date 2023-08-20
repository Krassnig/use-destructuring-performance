import { CSSProperties, useDebugValue, useRef } from "react";

export const useHeat = (): CSSProperties => {
	const heatRef = useRef(0);
	useDebugValue('render count: ' + heatRef.current);
	
	const red = Math.min(heatRef.current * 5, 255);

	heatRef.current += 1;
	
	return createRed(255 - red);
}

const createRed = (temperature: number): CSSProperties => {
	const color = leftPad(temperature.toString(16), 2).toUpperCase();
	return { backgroundColor: `#FF${color}${color}` };
}

const leftPad = (str: string, minLength: number): string => {
	while (str.length < minLength) {
		str = '0' + str;
	}

	return str;
}