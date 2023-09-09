import React, {useEffect, useState} from 'react';
import {
    ProjectItem,
    ProjectItemContent, ProjectItemOption, ProjectItems, ProjectItemTitle, ProjectItemTitleLine,
    ProjectItemTitleWrapper, ProjectItemWrapper, ProjectItemYear
} from "../../../styles/projectPage/ProjectSectionStyle";
import Link from "next/link";

const ListProject = ({props, currentItems}) => {
    const [project, setProject] = useState([])

    useEffect(() => {
        setProject(currentItems)
    }, [currentItems])

    return (
        <ProjectItems {...props}>
            {
                project.length ?
                    project.map((proj) =>
                        <Link key={proj.id} href={`/projects/${proj.id}`}>
                            <ProjectItem key={proj.id} {...props}>

                                <ProjectItemContent {...props}>
                                    <ProjectItemTitleWrapper {...props}>
                                        <ProjectItemTitle {...props}>
                                            {proj.title}
                                        </ProjectItemTitle>
                                        <ProjectItemTitleLine {...props}></ProjectItemTitleLine>
                                    </ProjectItemTitleWrapper>
                                    <ProjectItemWrapper {...props}>
                                        {proj.descriptionProj.map(({id, text}) =>
                                            <ProjectItemOption key={id} {...props}>
                                                {text}
                                            </ProjectItemOption>
                                        )}
                                    </ProjectItemWrapper>
                                </ProjectItemContent>

                                <ProjectItemYear {...props}>
                                    {proj.year}
                                </ProjectItemYear>
                            </ProjectItem>
                        </Link>
                    )
                    :
                    <div>
                        Ничего не найдено
                    </div>
            }
        </ProjectItems>
    );
};

export default ListProject;