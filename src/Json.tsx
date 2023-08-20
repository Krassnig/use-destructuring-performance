import styles from "./Json.module.css";

type Props = {
	json: any;
}

export const Json: React.FC<Props> = ({ json }) => {
	
	return (
		<pre className={styles.Json}>{ JSON.stringify(json, undefined, 2) }</pre>
	);
};
