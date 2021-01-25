import React from "react";
import { render } from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import {observable, autorun} from 'mobx';


class Parent extends React.Component {

  render() {
    // return <Countdown startTime="01:01:00" />;
  }
}

export default Parent;


ReactDOM.render(
  <Parent></Parent>
  ,
  document.getElementById('root')
);