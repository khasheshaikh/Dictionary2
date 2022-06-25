import React from 'react'
import {Card,Row} from 'react-bootstrap'
import { Synonyms } from './Synonyms'

export const RightContent=({resData,item})=>{
    return(
    <Card className="rightcontent">
     <Card>
     {resData.map((item)=>item.meanings.length>0 && <Synonyms item={item}/>)}  
     </Card> 
    
    </Card>
    )
}