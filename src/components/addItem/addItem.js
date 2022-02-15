import React from "react";

import './addItem.css'

const AddItem = ( {addNewItem}) => {
    return(
        <div className="addItem">
            <input type="text" />
            <button type="button" className="btn btn-outline-secondary" onClick={ () => addNewItem('hello')}>Add to do</button>
        </div>
    )
}

export default AddItem;