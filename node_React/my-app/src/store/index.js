import { observable, computed, action } from "mobx";
import moment from 'moment'

class AppStore {
    
    @observable time = '20';
    @observable todos = [];
    //尽量把需要改变的变量的方法用action写在store里面，这样可以更规范一些，也避免多人协作的麻烦
    @computed get desc() {
        return `${this.time}还有${this.todos.length}条任务待完成`
    }
    //意味着当time还有todos发生变化之后，就会重新自动执行，会返回一个新的结果
    @action 
    addTodo(todo) {
        this.todos.push(todo);
    }
    @action deleteTodo() {
        this.todos.pop()
       
    }
    @action resetTodo() {
        this.todos = []
    }
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
    
    
}

export default new AppStore();

