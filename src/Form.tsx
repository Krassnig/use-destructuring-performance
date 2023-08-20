import { CSSProperties, ReactNode } from "react";
import styles from "./Form.module.css";

type Props = {
	style: CSSProperties;
	children: ReactNode;
}

export const Form: React.FC<Props> = ({ style, children }) => {
	
	return (
		<form className={styles.Form} style={style}>
			{ children }
		</form>
	);
};
