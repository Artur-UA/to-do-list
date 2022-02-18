import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import InputMainPage from '../InputMainPage';
import Todo from '../ToDo';
import InputMainFilter from '../InputMainFilter';
import AddItem from '../addItem/addItem';
import './app.css';

export default class App extends Component{

    startId = 100;

    state = {
        toDoList : [
            this.createItem('Learn React'),
            this.createItem('Listen music'),
            this.createItem('Create app')

        ],
        term: '',
        filter: 'all'
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
  
            return {
                toDoList: this.toggleProperty( state.toDoList, id, 'done' )
            }
        })
    }

    onSearchItem(items, term){
        if (term.length === 0){
            return items
        }

        return items.filter( (item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1 ;
        })

    }
    onSearchItems = (text) => {
        this.setState(() => {
            return {
                term: text
            }
        })
    }

    onFilterItems = (name) => {
        this.setState(() => {
            return {
                filter: name
            }
        })
    }

    onFilterItem(items, filter){
        switch(filter){
            case 'all': 
                return items;
            case 'done':
                return items.filter( (item) => item.done);
            case 'active':
                return items.filter( (item) => !item.done);
            default:
                return items;
        }
    }



    render(){

        const itemDone = this.state.toDoList.filter( (el) => el.done ).length;
        const itemToDo = this.state.toDoList.length - itemDone;
 
        const visibleData = this.onFilterItem(this.onSearchItem(this.state.toDoList, this.state.term), this.state.filter);
        const isLoggin = true;
        const ButtonLogin = <button>Log in</button>
    
        return (
            <div className='main'>
                {isLoggin ? null : ButtonLogin}
                <AppHeader toDo={itemToDo} toDone={itemDone}/>
                <InputMainPage onSearchItem={this.onSearchItems} />
                <InputMainFilter filter={this.state.filter} onFilterItems = {this.onFilterItems}  /> 
                <Todo todos={visibleData} onDel={ /* (id) => {console.log(id)} */ this.onDele } onItemDone={this.onItemDone} onItemImportant={this.onItemImportant}/>
                <AddItem addNewItem={this.addNewItems}/>
            </div>
        )
    }
}
