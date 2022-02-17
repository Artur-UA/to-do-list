import React from 'react';
import './InputMainPage.css';

const InputMainPage = (props) => {
    const searchText = 'Search';
    const searchStyle = {
        fontSize : '20px',
        color : 'blue'
    }
    return (


        <input className='inputMainPage'
            placeholder= {searchText}
            style = {searchStyle} 
            onChange={ (e) => { props.onSearchItem(e.target.value)  }}
        />
    )
}

export default InputMainPage;