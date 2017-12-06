import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class AddTodo extends Component{
    render(){
        const { store } = this.props;
        return (
            <div>
                <input type="text" placeholder="添加todolist" onChange={(e) => store.newtodo = e.target.value} defaultValue={store.newtodo}/>
                <button onClick={store.AddTodo}> 添加1 </button>
                <button onClick={store.AddTodo10}> 添加10 </button>
            </div>
        )
    }
}