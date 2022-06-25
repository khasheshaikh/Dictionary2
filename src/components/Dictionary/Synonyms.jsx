import React from 'react';
import {Card,Row,Col} from 'react-bootstrap'
import {Word} from './Word'

export const Synonyms=({item})=>{
    return(
        <Card className="meaning">
        <h2>Synonyms</h2>
        <Word w={item.meanings[0]}/>
    </Card>  
    )
}