import logo from './logo.svg';
import './App.css';
import axios from 'axios'



import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
export default class App extends Component {
  state = {
    list:[]
  }
  componentDidMount(){
    const url = "https://cnodejs.org/api/v1/topics"
    axios.get(url).then(response => {
        if (!response) {
            console.log('Loading')
        } else {
            // let { list } = this.state;
            // list = response.data;
            // this.setState({ list });
            console.log(response.data)
        }
    })
  }

    render() {
        return (
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
)
}
}