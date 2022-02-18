import React, {Component} from "react";

import './addItem.css'

export default class AddItem extends Component {
    
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label : e.target.value
        })
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if (e.target[0].value.length === 0 ){
            return 
        } else {
            this.props.addNewItem(this.state.label);
            this.setState({
                label: ''
            })
        }
        
    }
    render(){
        return (
            <form className="addItem d-flex" onSubmit={this.onSubmitForm}>
                <input type="text" className="form-control" placeholder="What needs to be done?" onChange={this.onLabelChange} value={this.state.label} />
                <button className="btn btn-outline-secondary" /* onClick={ () => addNewItem('hello')} */ >Add to do</button>
            </form>
        )
    }
}
