import React from 'react'
import {Card,Row,Col,Form} from 'react-bootstrap'
import {Meaning} from "./Meaning"
import "./Dictionary.css"

export const MeaningList =({item})=>{
    return(
      <Card className="meaning">
          <h2>Meaning List</h2>
          {item.meanings.map((m)=>(<Meaning m={m}/>))}
      </Card>  
    )
}