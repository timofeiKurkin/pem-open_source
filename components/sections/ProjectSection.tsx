import {
    ProjectGuide,
    ProjectMain, ProjectTitle
} from "../../styles/projectPage/ProjectSectionStyle";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setLoading, setPage, setFilterProject, setCurrentItems} from "../../store/reducers/projectSlice";
import React, {FC, useEffect} from "react";
import {MediaType} from "../../types/MediaType";
import TitleContacts from "../blocks/TitleContacts";
import SearchProject from "../blocks/project/SearchProject";
import PaginateProject from "../blocks/project/PaginateProject";
import ListProject from "../blocks/project/ListProject";

type PropsType = {
    props: MediaType
}

const ProjectSection: FC<PropsType> = ({props}) => {
    const {limit, currentItems, filterProject} = useAppSelector(state => state.projectReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPage(Math.ceil(filterProject.length / limit)))
        dispatch(setLoading(true))
    }, [dispatch, filterProject, filterProject.length, limit])

    return (
        <ProjectMain {...props}>
            <ProjectTitle>
                <TitleContacts>Проекты</TitleContacts>
            </ProjectTitle>

            <ProjectGuide {...props}>
                <SearchProject props={props}
                />

                <PaginateProject props={props}/>
            </ProjectGuide>

            <ListProject props={props} currentItems={currentItems}/>
        </ProjectMain>
    );
};

export default ProjectSection;