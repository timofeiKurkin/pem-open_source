import WorkSection from "../components/sections/WorkSection";
import listServicesInfo from "../data/servicesInfo.json";
import Head from "next/head";
import React from "react";
import {NextPage} from "next";
import {MediaType} from "../types/MediaType";
import {workType} from "../types/WorkType";

export const getStaticProps = async () => {
    const data = listServicesInfo

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            content: data.servicesItem
        }
    }
}

type PropsType = {
    media: MediaType,
    content: workType[]
}

const Work: NextPage<PropsType> = ({media, content}) => {

    return (
        <>
            <Head>
                <title>Услуги</title>
            </Head>
            <WorkSection props={media} services={content}/>
        </>

    );
};

export default Work;