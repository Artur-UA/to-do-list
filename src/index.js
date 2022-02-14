import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import InputMainPage from './components/InputMainPage';
import Todo from './components/ToDo';
import InputMainFilter from './components/InputMainFilter';
const toDoList = [
    {label: 'Learn React', important: false, id: 1},
    {label: 'Listen music', important: true, id: 2},
    {label: 'Create app', important: false, id: 3}
]

const itemToDo = 1
const itemDone = 3;

const isLoggin = true;
const ButtonLogin = <button>Log in</button>
const App = () => {
    return (
        <div>
            {isLoggin ? null : ButtonLogin}
            <span>{ new Date().toString() }</span>
            <AppHeader toDo={itemToDo} toDone={itemDone}/>
            <InputMainPage/>
            <InputMainFilter/>
            <Todo todos={toDoList} />
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root')
);