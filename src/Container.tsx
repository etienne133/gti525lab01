import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {arrivalsFile} from './arrivals'
import {linesFile} from './lines'
import {stopsFile} from './stops'
import App from './App'
import IAppState from './App'
//ICI ON MANAGE LE STATE DE L'APP ... 

export interface IAppState {
  lines : line[]; 
  handleLineClick : (id:string) => void 
} 


export interface category {
  lines:line[]; 
  name:string;
} 

export interface line{ // les lignes contiennes les autre shits 
  //stops:stop[]
  category: string;
  direction: string;
  id: string;
  name: string;
  //lineClick:(e:any)=>void 
}  

export interface stop{
  arrival:arrival[]
}  

export interface arrival{

}

const reducer = (accumulator:string[], currentValue:string) => accumulator.push(currentValue);

class Container extends React.Component<any>
{
  constructor(props:any) {
    super(props);
    const line:line[] = linesFile.map(x=>x)
    // const categories:category[] = linesFile.map<category>(
    //   (key)=>({
    //     name:key.name
        
    // }))
    const categories2:category[] = linesFile.reduce<any>(
      (acc, curr)=>{
        if(!acc[curr.category]) acc[curr.category] = []; //If this type wasn't previously stored
        acc[curr.category].push(curr);
        return acc;
    },{})
    console.log(categories2);  
     //retursn
    //console.log(line)
    //console.log(categories)
    // const abc:IAppState =  { 
    //   arrivals:arrivals, 
    //   lines:lines,
    //   stops:stops,
    // };
    //lecture des fichier et mapping ici. 
    

    this.setState(line)
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e:React.MouseEvent) => {
    
  } 


  componentWillMount(){

  }
  componentDidMount() {
 
  }


  render() {
    return <App {...this.state} handleClick={this.handleClick}/>
  }
};

export default Container;
