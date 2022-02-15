import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import InputMainPage from '../InputMainPage';
import Todo from '../ToDo';
import InputMainFilter from '../InputMainFilter';
import AddItem from '../addItem/addItem';
import './app.css';
import { render } from '@testing-library/react';

export default class App extends Component{

    startId = 100;

    state = {
        toDoList : [
            {label: 'Learn React', important: false, id: 1},
            {label: 'Listen music', important: true, id: 2},
            {label: 'Create app', important: false, id: 3}
        ]
    }

    onDele = (id) => {
        /* console.log(id); */
        this.setState( (state) => {
            const idx = state.toDoList.findIndex( (el) => el.id === id);
            const before = state.toDoList.slice(0, idx);
            const after = state.toDoList.slice(idx + 1);
            console.log(after);
            const newToDoList = [...before, ...after];
            return {
                toDoList: newToDoList
            }
        })
    }

    
    addNewItems = (text) =>{
        console.log(text);
        const newItem = {
            label: text,
            important: false,
            id: this.startId++
        }
        this.setState( (state) => {
            const newAddIdState = [ ...state.toDoList, newItem];
            return{
                toDoList: newAddIdState
            }
        })
    }

    render(){

    
        const itemToDo = 1
        const itemDone = 3;
        const isLoggin = true;
        const ButtonLogin = <button>Log in</button>
    
        return (
            <div className='main'>
                {isLoggin ? null : ButtonLogin}
                {/* <span>{ new Date().toString() }</span> */}
                <AppHeader toDo={itemToDo} toDone={itemDone}/>
                <InputMainPage/>
                <InputMainFilter/>
                <Todo todos={this.state.toDoList} onDel={ /* (id) => {console.log(id)} */ this.onDele }/>
                <AddItem addNewItem={this.addNewItems}/>
            </div>
        )
    }
}

/* const App = () => {
    const toDoList = [
        {label: 'Learn React', important: false, id: 1},
        {label: 'Listen music', important: true, id: 2},
        {label: 'Create app', important: false, id: 3}
    ];

    const itemToDo = 1
    const itemDone = 3;
    const isLoggin = true;
    const ButtonLogin = <button>Log in</button>

    return (
        <div className='main'>
            {isLoggin ? null : ButtonLogin}
            {// <span>{ new Date().toString() }</span> //}
            <AppHeader toDo={itemToDo} toDone={itemDone}/>
            <InputMainPage/>
            <InputMainFilter/>
            <Todo todos={toDoList} onDel={ (id) => {console.log(id)} }/>
        </div>
    )
}

export default App; */