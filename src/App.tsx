import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { line, CategoryTypes, category, stop } from './Container';
import { isNullOrUndefined } from 'util';

export interface patate {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  map: Map<string, line[]>;
  categories?: category[];
  stops: any;
}

const APP: FC<patate> = ({ handleClick, map, categories, stops }) => {
  const locals = map.get(CategoryTypes.LOCAL);
  const night = map.get(CategoryTypes.NIGHT);
  const express = map.get(CategoryTypes.EXPRESS);
  const shuttle = map.get(CategoryTypes.DEDICATED);
  const shuttleOr = map.get(CategoryTypes.SHUTTLE_OR);
  const all = locals!
    .concat(night!)
    .concat(express!)
    .concat(shuttle!)
    .concat(shuttleOr!);

  const [showLine, setLine] = useState('');
  const [selectedLine, setSelectedLine] = useState('');

  const getLinebyId = (id: string): line => {
    return all.find(x => x.id === id)!;
  }

  const line = getLinebyId(selectedLine || '');

  const getStopsByLine = (line: line): stop[] => {
    
    const id = `${line.id}-${line.direction.charAt(0)}`;
    console.log(id);
    
    return stops[id] as stop[];
  }

  const stop = line === undefined ? undefined : getStopsByLine(line);
  console.log(stop);
  

  return (
    <div className="App">
      <div className="wrapper">
        <div className="top-section">
          {/* Very ugly images */}
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="logo"
            className="logo"
          />
          <img
            src={process.env.PUBLIC_URL + '/banner.png'}
            alt="banner"
            className="banner"
          />
        </div>
        <div className="main">
          <div className="main-section list">
            {/* ALL */}
            <span
              className={`all list-el ${showLine === 'all' ? 'active' : ''}`}
              onClick={() => {
                setLine(showLine === 'all' ? '' : 'all');
              }}
            >
              Toutes les lignes
            </span>
            <ul>
              {all!.map((x, index) => {
                return showLine === 'all' ? (
                  <li
                    key={index}
                    className="list-item"
                    onClick={() =>
                      setSelectedLine(`${x.id}`)
                    }
                  >
                    {`${x.id} - ${x.name} (${x.direction})`}
                  </li>
                ) : (
                  ''
                );
              })}
            </ul>

            {/* LOCAL */}
            <span
              className={`local list-el ${
                showLine === 'local' ? 'active' : ''
              }`}
              onClick={() => setLine(showLine === 'local' ? '' : 'local')}
            >
              Réseau local
            </span>
            <ul>
              {locals!.map((x, index) => {
                return showLine === 'local' ? (
                  <li
                    key={index}
                    className="list-item"
                    onClick={() =>
                      setSelectedLine(`${x.id}`)
                    }
                  >
                    {`${x.id} - ${x.name} (${x.direction})`}
                  </li>
                ) : (
                  ''
                );
              })}
            </ul>

            {/* NIGHT */}
            <span
              className={`night list-el ${
                showLine === 'night' ? 'active' : ''
              }`}
              onClick={() => setLine(showLine === 'night' ? '' : 'night')}
            >
              Réseau de nuit
            </span>
            <ul>
              {night?.map((x, index) => {
                return showLine === 'night' ? (
                  <li
                    key={index}
                    className="list-item"
                    onClick={() =>
                      setSelectedLine(`${x.id}`)
                    }
                  >
                    {`${x.id} - ${x.name} (${x.direction})`}
                  </li>
                ) : (
                  ''
                );
              })}
            </ul>

            {/* EXPRESS */}
            <span
              className={`express list-el ${
                showLine === 'express' ? 'active' : ''
              }`}
              onClick={() => setLine(showLine === 'express' ? '' : 'express')}
            >
              Réseau express
            </span>
            <ul>
              {express?.map((x, index) => {
                return showLine === 'express' ? (
                  <li
                    key={index}
                    className="list-item"
                    onClick={() =>
                      setSelectedLine(`${x.id}`)
                    }
                  >
                    {`${x.id} - ${x.name} (${x.direction})`}
                  </li>
                ) : (
                  ''
                );
              })}
            </ul>

            {/* SHUTTLE */}
            <span
              className={`shuttle list-el ${
                showLine === 'shuttle' ? 'active' : ''
              }`}
              onClick={() => setLine(showLine === 'shuttle' ? '' : 'shuttle')}
            >
              Navettes
            </span>
            <ul>
              {shuttle?.map((x, index) => {
                return showLine === 'shuttle' ? (
                  <li
                    key={index}
                    className="list-item"
                    onClick={() =>
                      setSelectedLine(`${x.id}`)
                    }
                  >
                    {`${x.id} - ${x.name} (${x.direction})`}
                  </li>
                ) : (
                  ''
                );
              })}
            </ul>

            {/* SHUTTLE OR */}
            <span
              className={`shuttleor list-el ${
                showLine === 'shuttleOr' ? 'active' : ''
              }`}
              onClick={() =>
                setLine(showLine === 'shuttleOr' ? '' : 'shuttleOr')
              }
            >
              Navettes Or
            </span>
            <ul>
              {shuttleOr?.map((x, index) => {
                return showLine === 'shuttleOr' ? (
                  <li
                    key={index}
                    className="list-item"
                    onClick={() =>
                      setSelectedLine(`${x.id}`)
                    }
                  >
                    {`${x.id} - ${x.name} (${x.direction})`}
                  </li>
                ) : (
                  ''
                );
              })}
            </ul>
          </div>
          {/* <div>
              {categories &&
                Object.entries(categories).map((x, i) => {
                  return (
                    <>
                      <span key={i} className="list-el">
                        {x[0]}
                      </span>
                        {x[1].childrens?.map(y=>y({
                          category:"A",
                          direction:"b",
                          id:"fff",
                          name:"sss"
                        }))}
                    </>
                  );
                })}
          </div> */}
          <div className="main-section table-container">
            {/* TODO: Dynamic table text */}
        <span>{selectedLine === '' ? '' : getLinebyId(selectedLine).name}</span>
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
        <td>{stop === undefined ? '' : stop![0].name}</td>
              <td>{stop === undefined ? '' : stop![0].id}</td>
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
          Equipe #10 <br />
          Etienne Fullum - Etienne.Fullum.1@ens.etsmtl.ca <br />
          Guillaume Leblanc - Guillaume.Leblanc.1@ens.etsmtl.ca <br />
          Joel Arsenault - Joel.Arsenault.1@ens.etsmtl.ca <br />
          Loic Fettich - Loic.Fettich.1@ens.etsmtl.ca <br />
        </div>
      </div>
    </div>
  );
};
export default APP;
