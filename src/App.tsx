import styles from "./App.module.css";
import { DebounceForm } from "./debounce/DebounceForm";
import { TwinsForm } from "./twins/TwinsForm";
import { WithMemoForm } from "./with-memo/WithMemoForm";
import { WithoutMemoForm } from "./without-memo/WithoutMemoForm";

export const App: React.FC = () => {
	
	return (
		<main className={styles.App}>
			<WithoutMemoForm />
			<WithMemoForm />
			<TwinsForm />
			<DebounceForm />
		</main>
	);
};
