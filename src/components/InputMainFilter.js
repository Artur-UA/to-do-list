import React, {Component} from 'react';
import './InputMainFilter.css';

export default class InputMainFilter extends Component{

    render(){
        return (
            <div className='inputFilter'>
                <button type='button' className='btn btn-info'>All</button>
                <button type='button' className='btn btn-outline-second'>Active</button>
                <button type='button' className='btn btn-outline-second'>Done</button>
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