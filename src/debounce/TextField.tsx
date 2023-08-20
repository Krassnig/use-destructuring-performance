import styles from "../TextField.module.css";
import React from "react";
import { SetState } from "../SetState";
import { useHeat } from "../use-heat";
import { useDebounce } from "./use-debounce";

type Props = {
	text: string;
	setText: SetState<string>;
}

export const TextField: React.FC<Props> = React.memo(({ text, setText }) => {
	const [text2, setText2] = useDebounce(text, setText, 400);

	const heat = useHeat();

	return (
		<div className={styles.TextField} style={heat}>
			<input type="text" value={text2} onChange={e => setText2(e.target.value)} />
		</div>
	);
});
