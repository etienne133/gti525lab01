import React, {FC, useEffect, useState} from 'react'
import './App.css'
import { line, CategoryTypes, category } from './Container';

export interface patate {
  handleClick: (event: React.MouseEvent<HTMLElement>)=>void;
  map: Map<string, line[]>;
  categories?: category[] 
} 


const APP:FC<patate> = ({handleClick, map}) =>{
    const locals = map.get(CategoryTypes.LOCAL);
    const night = map.get(CategoryTypes.NIGHT);
    const express = map.get(CategoryTypes.EXPRESS);
    const shuttle = map.get(CategoryTypes.DEDICATED);
    const shuttleOr = map.get(CategoryTypes.SHUTTLE_OR);
    const all = locals!.concat(night!).concat(express!).concat(shuttle!).concat(shuttleOr!);

    const [showLine, setLine] = useState('');
    const [selectedLine, setSelectedLine] = useState('');

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
                {/* ALL */}
                <span className={`all list-el ${showLine === 'all' ? 'active' : ''}`} onClick={() => {setLine(showLine === 'all' ? '' : 'all')}}>
                  Toutes les lignes
                </span>
                <ul>{all!.map((x, index) => {
                  return showLine === 'all' ?
                    <li key={index} className="list-item" onClick={() => setSelectedLine(`${x.id} - ${x.name} (${x.direction})`)}>
                      {`${x.id} - ${x.name} (${x.direction})`}
                    </li> : ''})}
                </ul>

                {/* LOCAL */}
                <span className={`local list-el ${showLine === 'local' ? 'active' : ''}`} onClick={() => setLine(showLine === 'local' ? '' : 'local')}>Réseau local</span>
                <ul>{locals!.map((x, index) => {
                  return showLine === 'local' ?
                    <li key={index} className="list-item" onClick={() => setSelectedLine(`${x.id} - ${x.name} (${x.direction})`)}>
                      {`${x.id} - ${x.name} (${x.direction})`}
                    </li> : ''})}
                </ul>

                {/* NIGHT */}
                <span className={`night list-el ${showLine === 'night' ? 'active' : ''}`} onClick={() => setLine(showLine === 'night' ? '' : 'night')}>Réseau de nuit</span>
                <ul>{night?.map((x, index) => {
                  return showLine === 'night' ?
                    <li key={index} className="list-item" onClick={() => setSelectedLine(`${x.id} - ${x.name} (${x.direction})`)}>
                      {`${x.id} - ${x.name} (${x.direction})`}
                    </li> : ''})}
                </ul>

                {/* EXPRESS */}
                <span className={`express list-el ${showLine === 'express' ? 'active' : ''}`} onClick={() => setLine(showLine === 'express' ? '' : 'express')}>Réseau express</span>
                <ul>{express?.map((x, index) => {
                  return showLine === 'express' ?
                    <li key={index} className="list-item" onClick={() => setSelectedLine(`${x.id} - ${x.name} (${x.direction})`)}>
                      {`${x.id} - ${x.name} (${x.direction})`}
                    </li> : ''})}
                </ul>

                {/* SHUTTLE */}
                <span className={`shuttle list-el ${showLine === 'shuttle' ? 'active' : ''}`} onClick={() => setLine(showLine === 'shuttle' ? '' : 'shuttle')}>Navettes</span>
                <ul>{shuttle?.map((x, index) => {
                  return showLine === 'shuttle' ?
                    <li key={index} className="list-item" onClick={() => setSelectedLine(`${x.id} - ${x.name} (${x.direction})`)}>
                      {`${x.id} - ${x.name} (${x.direction})`}
                    </li> : ''})}
                </ul>

                {/* SHUTTLE OR */}
                <span className={`shuttleor list-el ${showLine === 'shuttleOr' ? 'active' : ''}`} onClick={() => setLine(showLine === 'shuttleOr' ? '' : 'shuttleOr')}>Navettes Or</span>
                <ul>{shuttleOr?.map((x, index) => {
                  return showLine === 'shuttleOr' ?
                    <li key={index} className="list-item" onClick={() => setSelectedLine(`${x.id} - ${x.name} (${x.direction})`)}>
                      {`${x.id} - ${x.name} (${x.direction})`}
                    </li> : ''})}
                </ul>
              </div>
              <div>
              <div className="main-section list">
                abc
          {categories && categories.map((x,i) => {return (
          <span className="list-el">
            {x.childrens}
          </span>)})}
              </div>
              
            

              </div>
              <div className="main-section table-container">
                {/* TODO: Dynamic table text */}
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
            <div className="Footer">
              Equipe #10 <br/>
              Etienne Fullum - Etienne.Fullum.1@ens.etsmtl.ca <br/>
              Guillaume Leblanc - Guillaume.Leblanc.1@ens.etsmtl.ca <br/>
              Joel Arsenault - Joel.Arsenault.1@ens.etsmtl.ca <br/>
              Loic Fettich - Loic.Fettich.1@ens.etsmtl.ca <br/>
            </div>
          </div>
        </div>
      );
} 
export default APP;
