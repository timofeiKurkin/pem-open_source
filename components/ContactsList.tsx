import TitleContacts from "./blocks/TitleContacts";
import {
    Contact,
    ContactItem, ContactItemBody, ContactItemDescription, ContactItemTitle,
    ContactList,
    ContactsListWrapper,
    ContactWrapper
} from "../styles/contactsPage/ContactsListStyle";
import useWindowSize from "../hooks/useWindowSize";
import {FC} from "react";
import {ContactsType} from "../types/ContactsType";
import {MediaType} from "../types/MediaType";

type PropsType = {
    contacts: ContactsType[],
    props: MediaType
}

const ContactsList: FC<PropsType> = ({contacts, props}) => {

    return (
        <ContactsListWrapper>
            <TitleContacts>Контакты</TitleContacts>
                <Contact {...props}>
                    <ContactWrapper {...props}>
                        <ContactList {...props}>
                            {contacts.map(({id, title, description}) => (
                                <ContactItem key={id} {...props}>
                                    <ContactItemBody {...props}>
                                        <ContactItemTitle {...props}>{title}</ContactItemTitle>
                                        <ContactItemDescription {...props}>{description}</ContactItemDescription>
                                    </ContactItemBody>
                                </ContactItem>
                            ))}
                        </ContactList>
                    </ContactWrapper>
                </Contact>
        </ContactsListWrapper>
    );
};

export default ContactsList;