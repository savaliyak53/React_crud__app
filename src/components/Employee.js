import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useEffect, useState } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Edit from "./Edit";


const Employee = ({ employee }) => {
    const { deleteEmployee } = useContext(EmployeeContext)
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <OverlayTrigger overlay={
                    <Tooltip id={`tooltip-top`}>
                        Edit
                    </Tooltip>}>
                    <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>

                <OverlayTrigger overlay={
                    <Tooltip id={`tooltip-top`}>
                        DeleteEmployee
                    </Tooltip>}>
                    <button onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" >&#xE872;</i></button>
                </OverlayTrigger>
                
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Edit theEmployee={employee} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Button</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;