import React, {FC, useEffect} from 'react';
import ProjectItem from "../../components/blocks/project/ProjectItem";
import projectInfo from "../../data/projectsInfo.json";
import {useRouter} from "next/router";

export const getServerSideProps = async (context) => {
    const {project} = context.params
    const data = projectInfo.projects
    const currentProjectInfo = []

    data.filter((proj) => proj.id.toString() === project.toString()).map((item) => item.detailsProjectInfo && currentProjectInfo.push(...item.detailsProjectInfo))

    if (!currentProjectInfo) {
        return {
            notFound: true,
        }
    }

    return {
        props: {projectInfo: currentProjectInfo},
    }
}

const Project = ({projectInfo}) => {
    const router = useRouter()
    
    useEffect(() => {
        if(!projectInfo.length) {
            setTimeout(() => router.push('/projects'), 3000)
        }
    }, [projectInfo.length, router]);
    
    if(projectInfo.length) {
        return (
            <ProjectItem detailsProject={projectInfo}/>
        );
    } else {
        return (
            <div style={{
                margin: '100px 0px 40px 140px',
                fontSize: 30,
                fontWeight: 500
            }}>
                К сожалению данные об этом объекте отсутствуют.
            </div>
        )
    }
};

export default Project;