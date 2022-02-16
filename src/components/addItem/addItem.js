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
        this.props.addNewItem(this.state.label)
    }
    render(){
        const { addNewItem } = this.props;
        return (
            <form className="addItem d-flex" onSubmit={this.onSubmitForm}>
                <input type="text" className="form-control" placeholder="What needs to be done?" onChange={this.onLabelChange}/>
                <button type="button" className="btn btn-outline-secondary" /* onClick={ () => addNewItem('hello')} */ >Add to do</button>
            </form>
        )
    }
}
