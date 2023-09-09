import React, {useCallback, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setFilterProject} from "../../../store/reducers/projectSlice";
import CloseButton from "../../ui/CloseButton";
import {CloseButtonClick, ProjectSearchWrapper} from "../../../styles/projectPage/SearchProjectStyle";
import Search from "../../ui/Search";

const SearchProject = ({props}) => {
    const [filter, setFilter] = useState<string>('')

    const {project} = useAppSelector(state => state.projectReducer)
    const dispatch = useAppDispatch()

    const handlerFilter = useCallback(() => {
        return project.filter(proj => {
            return (proj.title.toLowerCase().includes(filter.replace(/[^А-Яа-яЁё]/g, '').toLowerCase())) &&
                proj.year.toString().includes(filter.replace(/[^0-9]/g, ""))
        })
    }, [project, filter])

    const handlerInput = (e) => {
        setFilter(e.target.value)
    }

    const clearInput = () => {
        setFilter('')
        dispatch(setFilterProject(project))
    }

    useEffect(() => {
        dispatch(setFilterProject(handlerFilter()))
    }, [dispatch, filter, handlerFilter, project])

    return (
        <ProjectSearchWrapper {...props}>
            <Search
                props={props}
                filter={filter}
                handlerInput={handlerInput}
                placeholder={'Введите название проекта или год...'}
            />
            <CloseButtonClick onClick={clearInput}>
                <CloseButton/>
            </CloseButtonClick>
        </ProjectSearchWrapper>

    );
};

export default SearchProject;