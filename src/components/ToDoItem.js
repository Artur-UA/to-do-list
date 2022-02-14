import React from 'react';
import './ToDoItem.css'


const ToDoItem = ( { label, important = false }) => {
    const style = {
        color : important ? 'red' : 'black',
        fontSize: '20px'
    }

    return (
        <div>
            <span className='todo_item' style={style}>{label}</span>
            <button type='button' className='btn btn-outline-success btn-sm'>
                <i className='fa fa-exclamation' />
            </button>
            <button type='button' className='btn btn-outline-success btn-sm'>
                <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
        </div>
    )
}

export default ToDoItem;