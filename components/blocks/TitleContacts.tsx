import React, {FC} from 'react';
import {TitleContactsStyle, TitleContactsText} from "../../styles/contactsPage/TitleContactsStyle";

const TitleContacts: FC<{children: string}> = ({children}) => {
    return (
        <TitleContactsStyle >
            <TitleContactsText>{children}</TitleContactsText>
        </TitleContactsStyle>
    );
};

export default TitleContacts;