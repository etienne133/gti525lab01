import React, {FC} from 'react'
interface Idata {
    arrivals?:any; 
    lines?:any;
    stops:any;
    handleClick: (event: React.MouseEvent<HTMLElement>)=>void;   
  } 

const app:FC<Idata> = ({handleClick}) =>{
    return (
        <div className="App">
          <div>
            GSAR2020 
          </div>
          <div className="top-section">
            <img /> <img />
          </div>
          <div className="main">
            <div className="Scrollable">
              <div
                className='box'
                onClick={handleClick}
              >
    
              </div>
            </div>
          </div>
          <div className="Footer"></div>
        </div>
      );
} 
export default app;