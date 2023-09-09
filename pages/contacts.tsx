import contactsInfo from '../data/contactsInfo.json'
import ContactsSection from "../components/sections/ContactsSection";
import Head from "next/head";
import React from "react";
import {ContactsType, VacanciesType} from "../types/ContactsType";
import {MediaType} from "../types/MediaType";
import {NextPage} from "next";

export const getStaticProps = async () => {
    const data = contactsInfo

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            contacts: data.contacts,
            vacancies: data.vacancies
        }
    }
}

type PropsType = {
    contacts: ContactsType[],
    vacancies: VacanciesType[],
    media: MediaType
}

const Contacts: NextPage<PropsType> = ({contacts, vacancies, media}) => {
    return (
        <>
            <Head>
                <title>Контакты</title>
            </Head>
            <main className='grid'>
                <ContactsSection contacts={contacts} vacancies={vacancies} props={media}/>
            </main>
        </>

    );
};

export default Contacts;