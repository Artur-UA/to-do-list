import React, {Component} from 'react';
import './ToDoItem.css'

export default class ToDoItem extends Component{

    /* state = {
        done: false,
        important: false
    } */
    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`);
        this.setState( (state) => {
            return {
                done: !state.done
            }
        });
    }

    /* onImportant = () => {
        this.setState( ({important}) => {
            return {
                important: !important
            }
        })
    } */
    render(){
        const { label, onDeleted, onItemDone, onItemImportant, done, important} = this.props;
        /* const { done, important} = this.state; */

        let toDoClass = 'todo_item';
        
        if(done){
            toDoClass += ' done';
        }

        if(important){
            toDoClass += ' important';
        }

        /* const style = {
            color : important ? 'red' : 'black',
            fontSize: '20px',
            fontWeight: important ? 'bold' : 'normal'
        } */
    
        return (
            <div className='toDoItem'>
                <span className={toDoClass} /* style={style}  */ /* onClick={ this.onLabelClick } */  onClick={onItemDone}  > {label} </span>

                <button type='button' className='btn btn-outline-success btn-sm' onClick={onDeleted} >
                    <i className="fa fa-trash-o" aria-hidden="true" />
                </button>
                <button type='button' className='btn btn-outline-success btn-sm' /* onClick={this.onImportant}  */ onClick={onItemImportant}  >
                    <i className='fa fa-exclamation' />
                </button>
                
            </div>
        )
    }
}

/* функциональный метод 
const ToDoItem1 = ( { label, important = false }) => {
    
    const style = {
        color : important ? 'red' : 'black',
        fontSize: '20px',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
        <div className='toDoItem'>
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

export default ToDoItem; */