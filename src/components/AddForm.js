import { useContext, useState } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { EmployeeContext } from '../contexts/EmployeeContext';

const AddForm = () => {
    const { addEmployee } = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({
        name: "", email: "", phone: "", address: ""
    })


    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }

    const { name, email, phone, address } = newEmployee

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, phone, address)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type='text'
                    placeholder='Name'
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='email'
                    placeholder='email'
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as='textarea'
                    placeholder='Address'
                    rows={3}
                    name="address"
                    value={address}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='tel'
                    placeholder='phone'
                    name="phone"
                    value={phone}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Button variant='success' type='submit' block>
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm