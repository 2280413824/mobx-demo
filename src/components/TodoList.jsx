import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class TodoList extends Component{
    render(){
        const { store } = this.props;
        return(
            <div>
                <div>
                    <input type="checkbox" onChange={(e) => store.checkAll()} checked={store.allChecked}/> items : {store.TodoListCount} &nbsp;
                    <button onClick={(e) => store.checkDelete()}>删除选中</button>
                </div>
                {store.todos.map(function (todo, i) {
                    return (
                        <div key={i}>
                            <input type="checkbox" checked={todo.checked} onChange={(key) => store.checkItem(i)}/> {todo.newtodo} &nbsp;
                            <button onClick={(e) => store.remove(todo)}>删除</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}