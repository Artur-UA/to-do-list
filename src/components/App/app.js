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
            /* {label: 'Learn React', important: false, id: 1},
            {label: 'Listen music', important: true, id: 2},
            {label: 'Create app', important: false, id: 3} */
            this.createItem('Learn React'),
            this.createItem('Listen music'),
            this.createItem('Create app')

        ]
    }

    createItem(text){
        return{
            label: text, 
            important: false,
            done: false,
            id: this.startId++
        }
    }


    onDele = (id) => {
        /* console.log(id); */
        this.setState( (state) => {
            const idx = state.toDoList.findIndex( (el) => el.id === id);
            const before = state.toDoList.slice(0, idx);
            const after = state.toDoList.slice(idx + 1);
            const newToDoList = [...before, ...after];
            return {
                toDoList: newToDoList
            }
        })
    }

    toggleProperty(arr, id, prop){
        const idx = arr.findIndex( (el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [prop]: !oldItem[prop] };

            return [
                    ...arr.slice(0, idx),
                    newItem,
                    ...arr.slice(idx + 1)
                ]
    }
    
    addNewItems = (text) =>{
        console.log(text);
        const newItem = this.createItem(text)
       /*  const newItem = {
            label: text,
            important: false,
            id: this.startId++
        } */
        this.setState( (state) => {
            const newAddIdState = [ ...state.toDoList, newItem];
            return{
                toDoList: newAddIdState
            }
        })
    }

    onItemImportant = (id) => {
        console.log('impor', id);
        this.setState( (state) => {
            return {
                toDoList: this.toggleProperty( state.toDoList, id, 'important' )
            }
        })
    }
    onItemDone = (id) => {
        console.log('done', id);
        this.setState( (state) => {
            /* const idx = state.toDoList.findIndex( (el) => el.id === id);
            const oldItem = state.toDoList[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArr = [
                ...state.toDoList.slice(0, idx),
                newItem,
                ...state.toDoList.slice(idx + 1)
            ]

            return {
                toDoList: newArr
            } */
            return {
                toDoList: this.toggleProperty( state.toDoList, id, 'done' )
            }
        })
    }
    render(){

        const itemDone = this.state.toDoList.filter( (el) => el.done ).length;
        const itemToDo = this.state.toDoList.length - itemDone;


        const isLoggin = true;
        const ButtonLogin = <button>Log in</button>
    
        return (
            <div className='main'>
                {isLoggin ? null : ButtonLogin}
                {/* <span>{ new Date().toString() }</span> */}
                <AppHeader toDo={itemToDo} toDone={itemDone}/>
                <InputMainPage/>
                <InputMainFilter/>
                <Todo todos={this.state.toDoList} onDel={ /* (id) => {console.log(id)} */ this.onDele } onItemDone={this.onItemDone} onItemImportant={this.onItemImportant}/>
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