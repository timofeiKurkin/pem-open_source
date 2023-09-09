import AboutSection from "../components/sections/AboutSection";
import aboutInfo from '../data/AboutContent.json'
import Head from "next/head";
import React from "react";
import {NextPage} from "next";
import {MediaType} from "../types/MediaType";
import {AboutType, SubdivisionsType} from "../types/AboutType";

export const getStaticProps = async () => {
    const data = aboutInfo

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            about: data.aboutCompany,
            subdivisions: data.subdivisions
        }
    }
}

const About: NextPage<{media: MediaType, about: AboutType[], subdivisions: SubdivisionsType[]}> = ({media,about, subdivisions}) => {
    return (
        <>
            <Head>
                <title>О нас</title>
            </Head>
            <AboutSection props={media} aboutCompany={about} subdivisions={subdivisions}/>
        </>

    );
};

export default About;