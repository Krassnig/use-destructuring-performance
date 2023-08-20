import { useEffect, useRef, useState } from "react";
import { SetState } from "../SetState";

/*
	This debounce hook does not work when a parent component also uses a debounce hook.
	This is also true if you are using useDestructuring.
*/

export const useDebounce = <T>(state: T, setState: SetState<T>, milliSeconds: number): [T, SetState<T>] => {
	const [unbouncedState, unbouncedSetState] = useState<T>(() => state);
	
	const isFirst_1 = useRef(0);
	useEffect(() => {
		// up propagation
		isFirst_1.current++;
		if (isFirst_1.current <= 1) return;

		const timeoutId = setTimeout(() => setState(() => unbouncedState), milliSeconds);
		return () => clearTimeout(timeoutId);
	}, [unbouncedState]);

	const isFirst_2= useRef(0);
	useEffect(() => {
		// down propagation
		isFirst_2.current++;
		if (isFirst_2.current <= 1) return;
		
		unbouncedSetState(state);
	}, [state]);

	return [unbouncedState, unbouncedSetState];
}