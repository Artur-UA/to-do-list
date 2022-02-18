import React, {Component} from 'react';
import './InputMainFilter.css';

export default class InputMainFilter extends Component{

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ]
    render(){

        const { filter, onFilterItems } = this.props; 


        const buttons = this.buttons.map( ( {name, label}) => {

            const isActive = filter === name;
            const activeClass = isActive ? 'btn-info' : 'btn-outline-second';


            return (
                <button type='button' className={`btn ${activeClass}`} key={name} onClick= { () => onFilterItems(name) }>{label}</button>
            )
        })
        
        return (
            <div className='inputFilter'>
                {buttons}
                {/* <button type='button' className='btn btn-info' onClick={this.props.onShowAllItem}>All</button>
                <button type='button' className='btn btn-outline-second' onClick={this.props.onShowActiveItem}>Active</button>
                <button type='button' className='btn btn-outline-second' onClick={ this.props.onShowDoneItem} >Done</button> */}
            </div>
        )
    }
}


/* const InputMainFilter = () => {
    return (
        <div className='inputFilter'>
            <button type='button' className='btn btn-info'>All</button>
            <button type='button' className='btn btn-outline-second'>Active</button>
            <button type='button' className='btn btn-outline-second'>Done</button>
        </div>
    )
};

export default InputMainFilter; */