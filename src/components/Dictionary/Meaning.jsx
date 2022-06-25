import React from 'react'
import {Card,Row,Col,Form} from 'react-bootstrap'

export const Meaning =({m})=>{
    return(
      <Card className="meaning">
          <i>---{m.partOfSpeech}---</i>
          {m.definitions.map((def, index)=>(
            <p>
            
              <i>{index + 1}.</i>{def.definition}
            
            </p> 
          ))}
          
      </Card>  
          )
}