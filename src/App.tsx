import React, {FC} from 'react'
import './App.css'
import { line, CategoryTypes } from './Container';

export interface patate {
  handleClick: (event: React.MouseEvent<HTMLElement>)=>void;
  map: Map<string, line[]>;
     
} 

/** hardcoded fn to group by same id */
function formatForMenu(list: line[]): string[] {
  const result: line[] = [];
  list.forEach(x => {
    const sameLine = result.find(y => x.id === y.id);
    if (sameLine) {
      sameLine.direction += `, ${x.direction}`;
    }
    else {
      result.push(x);
    }
  })

  return result.map(x => `- ${x.id} ${x.name} (${x.direction.toLocaleUpperCase()})`);
}

const app:FC<patate> = ({handleClick, map}) =>{
    const locals = formatForMenu(map.get(CategoryTypes.LOCAL)!);
    const night = formatForMenu(map.get(CategoryTypes.NIGHT)!);
    const express = formatForMenu(map.get(CategoryTypes.EXPRESS)!);
    const shuttle = formatForMenu(map.get(CategoryTypes.DEDICATED)!);
    const shuttleOr = formatForMenu(map.get(CategoryTypes.SHUTTLE_OR)!);
    const all = locals.concat(night, express, shuttle, shuttleOr).sort((a, b) => {
      // sort by id since lines were separated in different groups
      // regex finds the first number in string
      return a.replace( /(^.+)(\w\d+\w)(.+$)/i,'$2') > b.replace( /(^.+)(\w\d+\w)(.+$)/i,'$2') ? 1 : -1;
    })

    return (
        <div className="App">
          <div className="wrapper">
            <div className="top-section">
              {/* Very ugly images */}
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="logo" />
              <img src={process.env.PUBLIC_URL + '/banner.png'} alt="banner" className="banner" />
            </div>
            <div className="main">
              <div className="main-section list">
                {/* TODO: dynamically fill <ul/>'s */}
                <span className="list-el">Toutes les lignes</span>
                <ul>{all?.map((x, index) => {return <li key={index} className="list-item">{x}</li>})}</ul>
                <span className="list-el">Réseau local</span>
                <ul>{locals?.map((x, index) => {return <li key={index} className="list-item">{x}</li>})}</ul>
                <span className="list-el">Réseau de nuit</span>
                <ul>{night?.map((x, index) => {return <li key={index} className="list-item">{x}</li>})}</ul>
                <span className="list-el">Réseau express</span>
                <ul>{express?.map((x, index) => {return <li key={index} className="list-item">{x}</li>})}</ul>
                <span className="list-el">Navettes</span>
                <ul>{shuttle?.map((x, index) => {return <li key={index} className="list-item">{x}</li>})}</ul>
                <span className="list-el">Navettes Or</span>
                <ul>{shuttleOr?.map((x, index) => {return <li key={index} className="list-item">{x}</li>})}</ul>
              </div>

              <div className="main-section table-container">
                {/* TODO: Dynamic table text */}
                <span>10 De Lorimier - SUD</span>
                <table>
                  <tbody>
                    <tr>
                      <th>Arrêt</th>
                      <th>Code</th>
                      <th>Horaire</th>
                      <th>Favoris</th>
                    </tr>
                    <tr>
                      {/* TODO: Dynamic data */}
                      <td>De Lorimier / Crémazie</td>
                      <td>51133</td>
                      <td>[ ... ]</td>
                      <td>+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <div className="Scrollable">
                <div
                  className='box'
                  onClick={handleClick}
                >
                </div>
              </div> */}
            </div>
            {/* TODO: coordonées */}
            <div className="Footer">-- COORDS --</div>
          </div>
        </div>
      );
} 
export default app;