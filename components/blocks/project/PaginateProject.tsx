import React, {useEffect} from 'react';
import ReactPaginate from "react-paginate";
import {ProjectPagination} from "../../../styles/projectPage/ProjectSectionStyle";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setCurrentItems, setNewOffset} from "../../../store/reducers/projectSlice";

const PaginateProject = ({props}) => {
    const {limit, page, filterProject, newOffset} = useAppSelector(state => state.projectReducer)
    const dispatch = useAppDispatch()

    const handlePageClick = (event) => {
        const newOffset = event.selected * limit % filterProject.length
        dispatch(setNewOffset(newOffset))
    }

    useEffect(() => {
        const endOffset = newOffset + limit
        dispatch(setCurrentItems(filterProject.slice(newOffset, endOffset)))
    }, [newOffset, limit, dispatch, filterProject])

    return (
        <ProjectPagination {...props}>
            <ReactPaginate
                containerClassName={'root'}
                previousLabel="<"
                breakLabel=". . ."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={page}
                renderOnZeroPageCount={() => {
                    return <div>Упс!</div>
                }}
            />
        </ProjectPagination>
    )
};

export default PaginateProject;