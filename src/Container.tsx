/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./App.css";
import {arrivalsFile} from './arrivals'
import {linesFile} from './lines'
import {stopsFile} from './stops'
import App from './App'
import IAppState from './App'
//ICI ON MANAGE LE STATE DE L'APP ... 

export enum CategoryTypes  {
  LOCAL = 'local',
  SHUTTLE_OR = 'shuttleOr',
  NIGHT = 'night',
  EXPRESS = 'express',
  DEDICATED = 'dedicated'
}

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
  constructor(props: any) {
    super(props);
    this.state = {
      line: [],
      lineMap : new Map<string, category>()
    }
  }

  handleClick = (e:React.MouseEvent) => {
    
  } 


  componentWillMount(){

  }
  componentDidMount() {
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
    },{});
    console.log('CATEGORIES v2', categories2);  

    const categories3: Map<string, category[]> = linesFile.reduce<any>(
      (map: Map<string, category[]>, current: any) => {
        if (!map.has(current.category)) map.set(current.category, []);
        const array = map.get(current.category) as category[];
        array.push(current);
        return map.set(current.category, array);
      }, new Map<string, category[]>());

    Object.values(CategoryTypes).forEach(x => console.log('CATEGORIES v3 -', `${x}:`, categories3.get(x)));

     //retursn
    //console.log(line)
    //console.log(categories)
    // const abc:IAppState =  { 
    //   arrivals:arrivals, 
    //   lines:lines,
    //   stops:stops,
    // };
    //lecture des fichier et mapping ici. 
    

    this.setState({line, lineMap: categories3});
    //this.handleClick = this.handleClick.bind(this);
  }


  render() {
    return <App {...this.state} handleClick={this.handleClick}/>
  }
};

export default Container;
