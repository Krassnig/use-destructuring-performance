import styles from "../PhoneNumbersField.module.css";
import useDestructuring from "use-destructuring";
import { SetState } from "../SetState";
import { useHeat } from "../use-heat";
import { TextField } from "./TextField";
import React from "react";

type Props = {
	phoneNumbers: string[];
	setPhoneNumbers: SetState<string[]>;
}

export const PhoneNumbersField: React.FC<Props> = React.memo(({ phoneNumbers, setPhoneNumbers }) => {
	
	const destructuredPhoneNumbers = useDestructuring(phoneNumbers, setPhoneNumbers);

	const heat = useHeat();

	return (
		<div style={heat} className={styles.phoneNumbers}>
			<div>
				{ destructuredPhoneNumbers.map(([phoneNumber, setPhoneNumber, removePhoneNumber], i) => (
					<span key={i} className={styles.phoneNumber}>
						<TextField text={phoneNumber} setText={setPhoneNumber} />
						<button type="button" onClick={() => removePhoneNumber()}>✖</button>
					</span>
				)) }
			</div>
			<button type="button" onClick={() => setPhoneNumbers(old => [...old, '+000'])}>Add Phone Number</button>
		</div>
	);
});
