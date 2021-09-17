import React from 'react'
import { Link } from 'react-router-dom'
import{
    ListGroup,
    ListGroupItem,
    Button
}from 'reactstrap'

export const UserList = () => {
    return (
        <div>
            
        <ListGroup>
            <ListGroupItem className="d-flex"> 
                <strong> User One </strong>
                <div className="mr-2">
                    <Link to="/edit/1" className="btn btn-warning ml-2"> Edit </Link>
                </div>
        <Button color="danger ml-2"> Delete </Button>

             </ListGroupItem>
             <ListGroupItem className='d-flex'> 
                <strong> User Two </strong>
                <div >
                    <Link to="/edit/1" className="btn btn-warning ml-2"> Edit </Link>
                </div>
        <Button color="danger ml-3"> Delete </Button>

             </ListGroupItem>

        </ListGroup>

        </div>
    )
}
