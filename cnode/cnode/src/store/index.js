import { observable, computed, action } from "mobx";


class AppStore {
    @observable time = '20';
    @observable todos = [];
    @computed get desc() {
        return `${this.time}还有${this.todos.length}条任务待完成`
    }
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

