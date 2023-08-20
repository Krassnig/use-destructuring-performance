import { useState } from "react";
import { Person, createDefaultPerson } from "../person";
import { useHeat } from "../use-heat";
import useDestucturing from "use-destructuring";
import { TextField } from "./TextField";
import { PhoneNumbersField } from "./PhoneNumbersField";
import { Json } from "../Json";
import { Form } from "../Form";

export const WithoutMemoForm: React.FC = () => {
	const [person, setPerson] = useState<Person>(createDefaultPerson());

	const { firstName, lastName, phoneNumbers, address } = person;
	const { setFirstName, setLastName, setPhoneNumbers, setAddress } = useDestucturing(person, setPerson);

	const heat = useHeat();

	return (
		<Form style={heat}>
			Without Memo
			<TextField text={firstName} setText={setFirstName} />
			<TextField text={lastName} setText={setLastName} />
			<PhoneNumbersField phoneNumbers={phoneNumbers} setPhoneNumbers={setPhoneNumbers} />
			<TextField text={address} setText={setAddress} />
			<Json json={person} />
		</Form>
	);
};
