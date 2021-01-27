import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import store from '../store'
import {
    observer
} from 'mobx-react';
@observer
export default class IndexInvi extends Component {
    static propTypes = {
      history:PropTypes.any,
    }; 
    componentDidMount(){
      store.getIndexMessage('/topics')
    }
    changeTab = (type) =>{
      switch(type){
        case 'all':
          store.tab = 'all';
          break;
         case 'good':
           store.tab = 'good';
           break;
      }
      store.getIndexMessage('/topics')

    }
    goPage = (page) =>{
      store.page = page;
      store.getIndexMessage('/topics')
    }
    goDetile = (id)=>{
      this.props.history.history.push({pathname:'/detile'})
      let url = '/topic/' + id;

      store.getArticleDetile(url);
    }
    render() {
       
        return (
            <>
            
            <div onClick={()=>this.goPage(3)}>3</div>
            <div onClick={()=>this.goPage(1)}>1</div>
             <div id="main">
          <div id="home-nav" className="main-nav">
            <span className="active" data-id='all' onClick={()=>this.changeTab('all')}>全部</span>
            <span data-id='good' onClick={()=>this.changeTab('good')}>精华</span>
            <span data-id='share'>分享</span>
            <span data-id='ask'>问答</span>
            <span data-id='job'>招聘</span>
            <span data-id='dev'>客户端测试</span>
          </div>
          <div className="main-wrapper" id='home'>
            <div className="main-content content-hover">
              <div className="main-left">
                <a href="./user.html"
                  ><img
                    src="../src/image/main-content-img_01.jpg"
                    className="user-img"
                /></a>
                <div className="main-text">
                
                  {
                    
                    store.list.map((ele, index) => {
                      return (
                        <div key={index} onClick={()=>this.goDetile(ele.id)}>{ele.title}</div>       
                                                )

                      

                    }
                    )
                
                  }
                 
                </div>
              </div>
              <div className="main-right">
                <a href="./invi.html">
                  <img
                    src="../src/image/main-content-img_01.jpg"
                    alt=""
                    className="user-imgSmall"
                  /><span className="time">1小时前</span>
                </a>
              </div>
            </div>
          </div>
          <div id="turnPage-btn">

          </div>
        </div>
            </>
)
}
}