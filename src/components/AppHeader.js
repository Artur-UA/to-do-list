import React from 'react';
import './AppHeader.css'

const AppHeader = ({toDo, toDone}) => {
    return (
      <div className='appHeader'>
        <h1>To-do list</h1>
        <h2>{toDo} more to do, {toDone} done</h2>
      </div>
    )
  }

export default AppHeader;