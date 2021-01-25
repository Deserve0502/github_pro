import React, { Component, useState } from 'react';
import {
    // inject,
    observer
} from 'mobx-react';
import store from '../../store';
import { toJS } from 'mobx';

// @inject('store') 
// 
//把注入进来到store进行观察 所有到在store里面写的变量 一旦发生变化 那么所有使用observer都会跟着变化
@observer
export default class Home extends Component {

    timer =  setInterval(() => {
    
        store.getNow()
      
    }, 1000);
    handleTodos = (type) => {
        switch (type) {
            case 'add':
                store.addTodo('一条新任务');
                break;
            case 'delete':
                store.deleteTodo();
                break;
            case 'reset':
                store.resetTodo();
                break;
            default:
        }
    }
    render() {
        // let { store } = this.props;
        // console.log('-------', store)
        // const { todos, handleTodos } = store;
        // console.log('s收拾收拾', handleTodos)
        return (
            <div className='home'>
                在React中使用mobx
                {store.desc}
{}
                <button onClick={() => this.handleTodos('add')}>添加一条数据</button>
                <button onClick={() => this.handleTodos('delete')}>删除一条数据</button>
                <button onClick={() => this.handleTodos('reset')}>重置一条数据</button>
                {
                    store.todos.map((ele, index) => (
                            <div key={index}>{ele}</div>
                        )
                    )
                }
            </div>
        )
    }
}



