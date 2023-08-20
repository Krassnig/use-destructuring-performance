import styles from "../TextField.module.css";
import React from "react";
import { SetState } from "../SetState";
import { useHeat } from "../use-heat";

type Props = {
	text: string;
	setText: SetState<string>;
}

export const TextField: React.FC<Props> = React.memo(({ text, setText }) => {
	const heat = useHeat();

	return (
		<div className={styles.TextField} style={heat}>
			<input type="text" value={text} onChange={e => setText(e.target.value)} />
		</div>
	);
});
