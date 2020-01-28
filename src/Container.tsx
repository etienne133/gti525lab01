/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from "react";
import "./App.css";
import {arrivalsFile} from './arrivals'
import {linesFile} from './lines'
import {stopsFile} from './stops'
import App from './App'
import IAppState from './App'
import { lineLink } from "./line";
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
  category : category[]
} 


export interface category {
  lines:line[]; 
  name:string;
  categoryClick?:() => void;
  childrens?:FC<line>[];  
} 

export interface line{ // les lignes contiennes les autre shits 
  //stops:stop[]
  category: string;
  direction: string;
  id: string;
  name: string;
}  

export interface stop{
  arrival:arrival[]
}  

export interface arrival{

}

const reducer = (accumulator:string[], currentValue:string) => accumulator.push(currentValue);

const fetchData = () : category[] => {
  return  linesFile.reduce<category[]>(
    (acc, curr)=>{
      if(!acc[curr.category]) acc[curr.category] = []; //If this type wasn't previously stored
      acc[curr.category].push(
        {
          ...curr, 
          childrens: lineLink({...curr})
        });
      
      return acc;
  },[]) 
} 


class Container extends React.Component<{}, {line: line[], lineMap: Map<string, line[]>, categories2:category[]}>
{
  constructor(props: any) {
    super(props);
    this.state = {
      line: [],
      lineMap : new Map<string, line[]>(), 
      categories2 : fetchData()
    }
  }

  componentWillMount(){
    const line:line[] = linesFile.map(x=>x)
    // const categories:category[] = linesFile.map<category>(
    //   (key)=>({
    //     name:key.name
        
    // }))


    const categories3: Map<string, line[]> = linesFile.reduce<any>(
      (map: Map<string, line[]>, current: any) => {
        if (!map.has(current.category)) map.set(current.category, []);
        const array = map.get(current.category) as line[];
        array.push(current);
        return map.set(current.category, array);
      }, new Map<string, line[]>());

    Object.values(CategoryTypes).forEach(x => console.log('CATEGORIES v3 -', `${x}:`, categories3.get(x)));
    this.setState({line, lineMap: categories3}, () => this.render());


    //this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.refresh()
  }

  refresh = ():void => {
    setTimeout( () =>  {
      console.log("TIC")
      this.setState({categories2:fetchData()})
      return this.refresh() 
    }, 5000);
  } 
  handleClick = (e:React.MouseEvent) => {
    
  } 
  render() {
    return <App {...this.state} handleClick={this.handleClick} map={this.state.lineMap} categories={this.state.categories2} />
  }
};

export default Container;
