import React from 'react';
import MapYandex from "../MapYandex";
import ContactsList from "../ContactsList";
import Vacancies from "../Vacancies";
import {MainContacts} from "../../styles/contactsPage/ContactsSectionStyle";

const ContactsSection = ({contacts, vacancies, props}) => {
	return (
		<MainContacts {...props}>
			<MapYandex/>
			<ContactsList contacts={contacts} props={props}/>
			<Vacancies vacancies={vacancies} props={props}/>
		</MainContacts>
	);
};

export default ContactsSection;