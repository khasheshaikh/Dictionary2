import React from 'react'
import {Button,Card,Row,Col,Form} from 'react-bootstrap'

export const Sound =({a})=>{
    
        const audio = new Audio(`${a.audio}`) 
        
        const start=()=>audio.play();
    return  <Button onClick={start}>Play</Button>
              
        
         
        
        
        
        
    
    
          
}