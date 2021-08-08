import React from 'react'
import {Button,Card,Row,Col,Form, NavItem} from 'react-bootstrap'
import "./Dictionary.css"
import {Sound} from './Sound'

export const Pronounciation =({item})=>{
  
  
  
    return(
  <Card className="card-2">
    <Row>
      <Col>
      <h2>Pronounciation</h2>
      </Col>
      <Col>
      <h3>{item.phonetic}</h3>
      </Col>
      <Col>
      {item.phonetics.map((a)=>(<Sound a={a}/>))}
      </Col>
    </Row>
  </Card>
       
    )
}