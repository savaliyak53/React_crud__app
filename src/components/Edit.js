import { useContext, useState } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { EmployeeContext } from '../contexts/EmployeeContext';

const Edit = ({ theEmployee }) => {
    const id = theEmployee.id
    const [name, setName] = useState(theEmployee.name)
    const [email, setEmail] = useState(theEmployee.email)
    const [address, setAddress] = useState(theEmployee.address)
    const [phone, setPhone] = useState(theEmployee.phone)

    const { updateEmployee } = useContext(EmployeeContext);

    const updatedEmployee = { id, name, email, address, phone }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateEmployee(id, updatedEmployee)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Name'
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='email'
                    placeholder='email'
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as='textarea'
                    placeholder='Address'
                    rows={3}
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='tel'
                    placeholder='phone'
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant='success' type='submit' block>
                Edit
            </Button>
        </Form>
    )
}

export default Edit