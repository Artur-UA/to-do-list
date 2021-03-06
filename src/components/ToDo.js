import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDo.css';

/* const toDoList = ['Learn React', 'Listen music', 'Create app']; */
const Todo = ( {todos, onDel, onItemDone, onItemImportant}) => {
    const element = todos.map((item) => {

        const {id, ...otherProps} = item; 
        return(
            <li className='list-group-item' key={id}>
                <ToDoItem /* label={item.label} important={item.important}  вместо этого  можно так, но так передастся все { ...item }*/ {...otherProps} 
                onDeleted={ () => onDel(id)} onItemDone={ () => onItemDone(id) }  onItemImportant={ () => onItemImportant(id) } />
            </li>
        );
    });

    return(
        <ul className='list-group todo_list d'>
            {element}
            {/* <li><ToDoItem label ='Learn React' important/></li> */}
            {/* <li>{toDoList[2]}</li> */}
        </ul>
    );
}

export default Todo;