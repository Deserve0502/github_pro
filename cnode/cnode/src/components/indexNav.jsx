import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react';
@observer
export default class indexNav extends React.Component { 
    render() {
        return (
            <header>
            <div className="nav">
              <div id="nav-wrapper">
                <div className="nav-rightContent">
                  <a href="#"><img src="../image/logo.svg" alt="" /></a>
                  <div className="nav-search">
                    <span className="iconfont">&#xe618;</span><input type="text" />
                  </div>
                </div>
                <div className="nav-leftContent">
                  <ul>
                    <li>
                      <NavLink to='/index'>首页</NavLink>
                    </li>
                    <li>
                      <NavLink to='/new'>新手入门</NavLink>
                    </li>
                    <li>
                    <NavLink to='/api'>API</NavLink>
                    </li>

                    <li>
                      <NavLink to='/about'>关于</NavLink>
                    </li>
                    <li>
                      <NavLink to='/regist'>注册</NavLink>
                    </li>
                    <li>
                      <NavLink to='/login'>登录</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </header>
         
)
}
}