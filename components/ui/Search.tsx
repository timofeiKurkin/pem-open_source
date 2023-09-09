import React from 'react';
import {SearchStyle} from "../../styles/components/SearchStyle";

const Search = ({props, filter, handlerInput, placeholder}) => {
    return (
        <SearchStyle
            {...props}
            value={filter}
            onChange={handlerInput}
            placeholder={placeholder}
        />
    );
};

export default Search;