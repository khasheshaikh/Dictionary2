import React,{useState} from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import {LeftContent} from '../Dictionary/LeftContent'
import {RightContent} from '../Dictionary/RightContent'
import axios from "axios"
import './Dictionary.css'

export const Dictionary=()=>{
    const [resData, setResData] = useState([]);
    const [wordSearch, setWordSearch] = useState("")
    
    const handleSearch=()=>{
        axios 
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordSearch}`)
        .then((res)=>{
            console.log(res.data);
            setResData([...res.data])
        });
    }
    return(
        <Card className="dictionary">
            <Row>
                <Col md={8}>
                <LeftContent handleSearch={handleSearch} resData={resData} setWordSearch={setWordSearch}/></Col>
                <Col md={4}>
                <RightContent resData={resData}/>
                </Col>
            </Row>
        </Card>
    )
}