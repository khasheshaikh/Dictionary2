import React from 'react'
import {Card,Row,Col,Form} from 'react-bootstrap'
import {Element} from './Element'

export const Word =({w})=>{
    return(
    <Card className="meaning">
          <Element def={w.definitions}/>
    </Card>  
    )
}