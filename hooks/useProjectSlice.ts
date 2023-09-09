import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "./redux";
import {setCurrentItems} from "../store/reducers/projectSlice";

const useProjectSlice = () => {
    const {limit, page, filterProject, newOffset} = useAppSelector(state => state.projectReducer)
    // const [itemOffset, setItemOffset] = useState<number>(newOffset)
    const [loaded, setLoaded] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (loaded) return
        const endOffset = newOffset + limit
        dispatch(setCurrentItems(filterProject.slice(newOffset, endOffset)))
        setLoaded((prev) => !prev)
    }, [newOffset, limit, loaded, dispatch, filterProject])

}

export default useProjectSlice