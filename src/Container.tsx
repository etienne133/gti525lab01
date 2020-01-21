import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {arrivals} from './arrivals'
import {lines} from './lines'
import {stops} from './stops'
import App from './App'
import IAppState from './App'
//ICI ON MANAGE LE STATE DE L'APP ... 

export interface IAppState {
  arrivals?:any; 
  lines?:any;
  stops:any;
} 


class Container extends React.Component<any>
{
  constructor(props:any) {
    super(props);

    const abc:IAppState =  { 
      arrivals:arrivals, 
      lines:lines,
      stops:stops,
    };
    
    this.setState(abc)
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e:React.MouseEvent) => {
    
  } 


  componentWillMount(){

  }
  componentDidMount() {
 
  }
 //Fonction et logique ici 

  render() {
    return <App {...this.state} handleClick={this.handleClick}/>
  }
};

export default Container;
