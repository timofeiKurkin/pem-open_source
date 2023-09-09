import {useAppDispatch} from "../../hooks/redux";
import {setProject} from "../../store/reducers/projectSlice";
import React, {useEffect} from "react";
import projectInfo from '../../data/projectsInfo.json'
import ProjectSection from "../../components/sections/ProjectSection";
import Head from "next/head";
import {NextPage} from "next";
import {ProjectType} from "../../types/ProjectType";
import {MediaType} from "../../types/MediaType";

export const getStaticProps = async () => {
    const data = projectInfo

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            content: data.projects
        }
    }
}

type PropsType = {
    content: ProjectType[],
    media: MediaType
}

const Project: NextPage<PropsType> = ({content, media}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setProject(content))
    }, [content, dispatch])

    return (
        <>
            <Head>
                <title>Проекты</title>
            </Head>
            <ProjectSection props={media}
            />
        </>

    );
};

export default Project;