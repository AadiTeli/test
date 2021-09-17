import React from 'react'
import {

    Form,
    FormGroup,
    Button,
    Label,
    Input
} from 'reactstrap'
import { Link } from 'react-router-dom'

export const EditUser = () => {
    return (
        <Form>
        <FormGroup>
            <Label> Name </Label>
            <Input type="text" placeholder="EnterName"> </Input>
        </FormGroup>
        <Button type="submit"> Edit </Button>
        
        <Link to="/" className="btn btn-danger ml-3"> Cancel </Link>

    </Form>
    )
}
