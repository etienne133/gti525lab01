import React, {FC, useEffect, useState} from 'react'
import './App.css'
import { line, CategoryTypes } from './Container';

export interface patate {
  handleClick: (event: React.MouseEvent<HTMLElement>)=>void;
  map: Map<string, line[]>;
}


const APP:FC<patate> = ({handleClick, map}) =>{
    const locals = map.get(CategoryTypes.LOCAL);
    const night = map.get(CategoryTypes.NIGHT);
    const express = map.get(CategoryTypes.EXPRESS);
    const shuttle = map.get(CategoryTypes.DEDICATED);
    const shuttleOr = map.get(CategoryTypes.SHUTTLE_OR);

    const [showLocal, toggleLocal] = useState(false);
    const [showNight, toggleNight] = useState(false);
    const [showExpress, toggleExpress] = useState(false);
    const [showShuttle, toggleShuttle] = useState(false);
    const [showShuttleOr, toggleShuttleOr] = useState(false);

    useEffect(() => {
    });

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
                {/* <span className="list-el" onClick={() => toggleMenu(!showAll)}>Toutes les lignes</span>
                <ul>{all?.map((x, index) => {return <li key={index} className="list-item">{x}</li>})}</ul> */}
                <span className="list-el" onClick={() => toggleLocal(!showLocal)}>Réseau local</span>
                <ul>{locals!.map((x, index) => {return showLocal ? <li key={index} className="list-item">{`${x.id} - ${x.name} (${x.direction})`}</li> : ''})}</ul>
                <span className="list-el" onClick={() => toggleNight(!showNight)}>Réseau de nuit</span>
                <ul>{night?.map((x, index) => {return showNight ? <li key={index} className="list-item">{`${x.id} - ${x.name} (${x.direction})`}</li> : ''})}</ul>
                <span className="list-el" onClick={() => toggleExpress(!showExpress)}>Réseau express</span>
                <ul>{express?.map((x, index) => {return showExpress ? <li key={index} className="list-item">{`${x.id} - ${x.name} (${x.direction})`}</li> : ''})}</ul>
                <span className="list-el" onClick={() => toggleShuttle(!showShuttle)}>Navettes</span>
                <ul>{shuttle?.map((x, index) => {return showShuttle ? <li key={index} className="list-item">{`${x.id} - ${x.name} (${x.direction})`}</li> : ''})}</ul>
                <span className="list-el" onClick={() => toggleShuttleOr(!showShuttleOr)}>Navettes Or</span>
                <ul>{shuttleOr?.map((x, index) => {return showShuttleOr ? <li key={index} className="list-item">{`${x.id} - ${x.name} (${x.direction})`}</li> : ''})}</ul>
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
export default APP;