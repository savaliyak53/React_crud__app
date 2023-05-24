import Employee from "./Employee";
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import Page from "./Page";


const EmployeeList = () => {
    const { sortedEmployee } = useContext(EmployeeContext)

    const [show, setShow] = useState(false)

    const [showAlert, setShowAlert] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [employeesPerPage, setEmployeesPerPage] = useState(2)

    useEffect(() => {
        handleClose()

        return () => {
            handleShowAlert();
        }
    }, [sortedEmployee])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployee = sortedEmployee.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployee.length / employeesPerPage)

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={hangidleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)}>
                Employee List Update Successfully
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployee.map((employee) => (
                            <tr>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Page pages={totalPagesNum} setCurrentPage={setCurrentPage} currentEmployee={currentEmployee} sortedEmployee={sortedEmployee} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Button</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EmployeeList;