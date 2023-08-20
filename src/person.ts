export interface Person {
	firstName: string;
	lastName: string;
	phoneNumbers: string[];
	address: string;
}

export const createDefaultPerson = (): Person => {
	return {
		firstName: 'John',
		lastName: 'Smith',
		phoneNumbers: [ '+1234', '+5678' ],
		address: 'London Str. 123'
	}
}