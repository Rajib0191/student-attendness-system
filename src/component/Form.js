import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const FormContainer = (props) => {

    const addStudents = (event, name) => {
        event.preventDefault();
        if (name) {
            const newStudents = {
                id: new Date(),
                name: name
            };
            props.setStudents([newStudents, ...props.students]);
            props.setStudentsName("");
        } else {
            alert('Please Enter Valid Input')
        }
    }

    const updateHandler = (event, name) => {
        event.preventDefault();
        if (name) {
            props.editStudent.name = name || props.editStudent.name;
            props.setStudentsName("");
            props.setIsEditable(false);
            props.setEditStudent(null);
        } else {
            alert("Enter Valid Input");
        }
    }

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <form className='student__manage__form'>
                        <Form.Control type="text" value={props.studentsName} placeholder="Enter Student Name" className='students__name__filed'
                            onChange={(e) => props.setStudentsName(e.target.value)}
                        />
                        <button className='submit__button' onClick={(e) => props.isEditable ? updateHandler(e, props.studentsName) : addStudents(e, props.studentsName)}>
                            {props.isEditable ? 'Update Student' : 'Add Student'}
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;