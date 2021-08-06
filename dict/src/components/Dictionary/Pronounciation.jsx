import React from 'react'
import {Button,Card,Row,Col,Form} from 'react-bootstrap'
import "./Dictionary.css"

export const Pronounciation =()=>{
    return(
       
         <Form className="pronounciation">
          <Row>
              <Col md={4}>
                <h2>Pronounciation</h2>
              </Col>
              <Col md={8}>
                <Button>Play</Button>
              </Col>
          </Row>  
         </Form>  
       
    )
}