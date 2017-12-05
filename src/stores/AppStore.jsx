import { observable, computed, action } from 'mobx';
class AppStore {
    @observable todos = [];
    @observable newtodo = "";

    @action AddTodo = () => {
        // this.todos.push(this.newtodo);
        this.todos.push({
            newtodo: this.newtodo,
            checked: false
        })
    };

    @action remove(item) {
        this.todos.remove(item);
    }

    @action checkItem(key) {
        this.todos[key].checked = !this.todos[key].checked;
    }

    @action checkAll(){

    }

    @action checkDelete(){

    }

    @computed get TodoListCount() {
        return this.todos.length;
    }
}
export default AppStore;