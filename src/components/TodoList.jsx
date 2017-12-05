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
                    <input type="checkbox" onClick={store.checkAll}/> items : {store.TodoListCount}
                    <button onClick={store.checkDelete}>删除选中</button>
                </div>
                {store.todos.map(function (todo, i) {
                    return (
                        <div key={i}>
                            <input type="checkbox" checked={todo.checked} onClick={(key) => store.checkItem(i)}/> {todo.newtodo}
                            <button onClick={(e) => store.remove(todo)}>删除</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}