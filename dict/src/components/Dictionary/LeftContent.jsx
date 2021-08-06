import React from 'react'
import {Card,Row,Col,Form,Button} from 'react-bootstrap'
import {Pronounciation} from './Pronounciation'
import {Meaning} from './Meaning'
import "./Dictionary.css"
import { MeaningList } from './MeaningList'


export const LeftContent=({handleSearch,resData, setWordSearch})=>{
    return(
        
        <Card className="leftcontent">
        <Row>
            <Col md={8}>
                <Form.Control type="search" placeholder="type a word ..." onChange={(e)=>setWordSearch(e.target.value)}></Form.Control>
            </Col>
            <Col md={2}>
                <Button onClick={handleSearch}>search</Button>
            </Col>
            <Col md={2}>
                <Button>Play</Button>
              </Col>
        </Row>

        {/* <Pronounciation /> */}
        {resData.map((item)=>item.meanings.length>0 && <MeaningList item={item}/>
        )}
        </Card>
    )
}