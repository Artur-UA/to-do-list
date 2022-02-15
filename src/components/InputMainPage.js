import React from 'react';
import './InputMainPage.css';

const InputMainPage = () => {
    const searchText = 'Search';
    const searchStyle = {
        fontSize : '20px',
        color : 'blue'
    }
    return (
        <input className='inputMainPage'
            placeholder= {searchText}
            style = {searchStyle} />
    )
}

export default InputMainPage;