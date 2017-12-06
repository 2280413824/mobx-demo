import { observable, computed, action } from 'mobx';
class AppStore {
    @observable todos = []; //todos列表
    @observable newtodo = ""; //新添加的todo
    @observable allChecked = false; //全选

    //添加
    @action AddTodo = () => {
        this.todos.push({
            newtodo: this.newtodo,
            checked: this.allChecked
        })
    };

    //添加10
    @action AddTodo10 = () => {
        for (let i=0;i<10;i++){
            this.todos.push({
                newtodo: this.newtodo,
                checked: this.allChecked
            })
        }
    };

    //删除单个
    @action remove(item) {
        this.todos.remove(item);
    }

    //单选
    @action checkItem(key) {
        this.todos[key].checked = !this.todos[key].checked;
        this.allChecked = !this.isCheckedAll;
    }

    //全选
    @action checkAll(){
        this.allChecked = !this.allChecked;
        for (let i=0;i<this.todos.length;i++) {
            this.todos[i].checked = this.allChecked;
        }
    }

    //删除选中
    @action checkDelete(){
        this.todos = this.todos.filter((todo) => todo.checked === false);
    }

    //计算长度
    @computed get TodoListCount() {
        return this.todos.length;
    }

    //计算是否全选
    @computed get isCheckedAll() {
        /*
            如果有没选中的 返回true allChecked为false
            如果都选中了 返回false allChecked为true
            所以设置 allChecked = !返回 就可以了
        */
        return this.todos.find((todo) => todo.checked === false);
    }
}
export default AppStore;