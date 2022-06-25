import React from 'react'
import {Card} from 'react-bootstrap'

export const Element = (def)=>{
    return(
        <Card>
        {def.synonyms}
        </Card>
    )
}