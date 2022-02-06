import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AbsentStudent = (props) => {
    return (
        <div className='absents__students'>
            <h6 className='dashboard__header'>Absent Students</h6>
            <div className='dashboard__container'>
                <ul className='students__list'>
                    {props.students.filter(item => item.isPresent === false).map(student => (
                        <Row style={{ marginBottom: "10px" }} key={student.id}>
                            <Col lg={4} className='p-0'>
                                <li className="student__list">
                                    <span>{student.name}</span>
                                </li>
                            </Col>
                            <Col lg={8}>
                                <span className='buttons'>
                                    <button onClick={() => props.toggleHandler(student.id)}>Accedently Added</button>
                                </span>
                            </Col>
                        </Row>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AbsentStudent;