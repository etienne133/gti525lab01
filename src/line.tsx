import React, { FC } from "react"
import {line} from "./Container"

export const lineLink:FC<line> = ({
    category,
    direction,
    id,
    name,
    //TODO add click event handler here
  }) =>{
    return (
      <a onClick={(event: React.MouseEvent<HTMLElement>) => { //todo set click herew
        console.log("onclick")
        console.log(event)
       }}>
        {name + direction + id }
      </a>)
  } 

