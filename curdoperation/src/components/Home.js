import React from 'react';
import {Button,Table} from 'react-bootstrap';
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom'
export  function Home(){

    let history=useNavigate();

    const handleEdit=(id,name,age)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);

    }
    
    const handleDelete=(id)=>{
        var index=Employees.map(function(e){
            return e.id

        }).indexOf(id);

        Employees.splice(index,1);//delete the id
        
        history('/');

    }
    return (
        <>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                    {
                        Employees && Employees.length>0?
                        Employees.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                        <Link to={'/edit'}>
                                        <Button onClick={()=>handleEdit(item.Id,item.Name,item.Age)}>Edit</Button>
                                        </Link>

                                        <Button onClick={()=>handleDelete(item.Id)}>DELETE</Button>
                                    </td>
                                </tr>
                            )

                        }):
                        "No data Available"


                    }
            </tbody>
            </Table>
            <br/>
            <Link to="/create">
                    <Button size="lg">Create</Button>
            </Link>

        </div>
        </>
    )
}
