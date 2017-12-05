import React, {Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default class TodoView extends Component{
    render(){
        return(
            <div style={{marginLeft:'20px'}}>
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}