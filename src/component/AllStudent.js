import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AllStudent = (props) => {

    const deleteHandeler = (studentId) => {
        const newStudentList = props.students.filter((stu) => stu.id !== studentId);
        props.setStudents(newStudentList);
    }

    const editHandler = (studentId) => {
        props.setIsEditable(true);
        const student = props.students.find((student) => student.id === studentId);
        // console.log(student)
        props.setEditStudent(student);
        props.setStudentsName(student.name);
    }

    const presentHandler = (studentId) => {
        const student = props.students.find((item) => item.id === studentId)
        if (student.isPresent === undefined) {
            student.isPresent = true;
            props.setStudents([...props.students])
        } else if (student.isPresent === true) {
            alert("The student is already in the Present List")
        } else {
            alert("The student is already in the Absent List")
        }
        // console.log(student.isPresent)

    }

    const absentHandler = (studentId) => {
        const student = props.students.find((item) => item.id === studentId);
        if (student.isPresent === undefined) {
            student.isPresent = false;
            props.setStudents([...props.students]);
        } else if (student.isPresent === false) {
            alert("The student is already in the Absent List")
        } else {
            alert("The student is already in the Present List")
        }
        // console.log(student.isPresent)
    }
    return (
        <div className='total__students'>
            <h6 className='dashboard__header'>Total Students</h6>
            <div className='dashboard__container'>
                <ul className='students__list'>
                    {props.students.map((student) => {
                        return (
                            <Row style={{ marginBottom: "10px" }} key={student.id}>
                                <Col lg={4} className='p-0'>
                                    <li className="student__list">
                                        <span>{student.name}</span>
                                    </li>
                                </Col>
                                <Col lg={8}>
                                    <span className='buttons'>
                                        <button onClick={() => editHandler(student.id)}>Edit</button>
                                        <button onClick={() => deleteHandeler(student.id)}>Delete</button>
                                        <button onClick={() => presentHandler(student.id)}>Present</button>
                                        <button onClick={() => absentHandler(student.id)}>Absent</button>
                                    </span>
                                </Col>
                            </Row>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AllStudent;