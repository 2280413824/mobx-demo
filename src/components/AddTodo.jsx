import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class AddTodo extends Component{
    handleChange = (e) => {
        this.props.store.newtodo = e.target.value;
    };
    render(){
        return (
            <div>
                <input type="text" placeholder="添加todolist" onChange={this.handleChange}/>
                <button onClick={this.props.store.AddTodo}>Add</button>
            </div>
        )
    }
}