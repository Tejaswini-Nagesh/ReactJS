import React ,{useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'

export function Add(){
    const[name,setName]=useState("");
    const[age,setAge]=useState("");

    let history=useNavigate();

    const ids=uuid();

    const handleSubmit=(e)=>{
        e.preventDefault();
    

    let uniqueId=ids.slice(0,8);
    let a=name,
    b=age;
    Employees.push({Id:uniqueId,Name:a,Age:b});
    history('/');
}

    return(
        <>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter Age" required onChange={(e)=>setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
        </Form>
        </>
    )
}   