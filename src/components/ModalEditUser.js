import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

const ModalEditUser = ({ show, handleClose, userData, handleEditUser }) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    useEffect(() => {
        if (userData) {
            setName(userData.first_name);
            setJob(userData.last_name); // Bạn có thể tùy chỉnh giá trị này nếu cần
        }
    }, [userData]);

    const handleSaveChanges = () => {
        handleEditUser({ first_name: name, last_name: job }); // Sử dụng định dạng dữ liệu phù hợp với yêu cầu API
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>




    );

};

export default ModalEditUser;
