import React from 'react';

const InputMainPage = () => {
    const searchText = 'Search';
    const searchStyle = {
        fontSize : '40px',
        color : 'blue'
    }
    return (
        <input 
            placeholder= {searchText}
            style = {searchStyle} />
    )
}

export default InputMainPage;