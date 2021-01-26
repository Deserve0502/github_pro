import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
//import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import '../style/nav.css'
export default class indexNav extends Component {
    render() {
        return (
            <header>
            <div className="nav">
              <div id="nav-wrapper">
                <div className="nav-rightContent">
                  <a href="#"><img src="../src/image/logo.svg" alt="" /></a>
                  <div className="nav-search">
                    <span className="iconfont">&#xe618;</span><input type="text" />
                  </div>
                </div>
                <div className="nav-leftContent">
                  <ul>
                    <li>
                      <a href="http://127.0.0.1:5500/public/home.html">首页</a>
                    </li>
                    <li>
                      <a href="./freshman.html">新手入门</a>
                    </li>
                    <li><a href="http://127.0.0.1:5500/public/API.html">API</a></li>
                    <li>
                      <a href="http://127.0.0.1:5500/public/about.html">关于</a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9"
                        >注册</a
                      >
                    </li>
                    <li>
                      <a href="http://127.0.0.1:5500/public/signIn.html">登录</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
)
}
}