import React, { useState } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import AllStudent from './component/AllStudent';
import PresentStudent from './component/PresentStudent';
import AbsentStudent from './component/AbsentStudent';
import FormContainer from './component/Form';

const App = () => {
  const [studentsName, setStudentsName] = useState("");
  const [students, setStudents] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  // const addStudents = (event, name) => {
  //   event.preventDefault();
  //   if (name) {
  //     const newStudents = {
  //       id: new Date(),
  //       name: name
  //     };
  //     setStudents([newStudents, ...students]);
  //     setStudentsName("");
  //   } else {
  //     alert('Please Enter Valid Input')
  //   }
  // }

  // const deleteHandeler = (studentId) => {
  //   const newStudentList = students.filter((stu) => stu.id !== studentId);
  //   setStudents(newStudentList);
  // }

  // const editHandler = (studentId) => {
  //   setIsEditable(true);
  //   const student = students.find((student) => student.id === studentId);
  //   // console.log(student)
  //   setEditStudent(student);
  //   setStudentsName(student.name);
  // }

  // const updateHandler = (event, name) => {
  //   event.preventDefault();
  //   if (name) {
  //     editStudent.name = name || editStudent.name;
  //     setStudentsName("");
  //     setIsEditable(false);
  //     setEditStudent(null);
  //   } else {
  //     alert("Enter Valid Input");
  //   }
  // }

  // const presentHandler = (studentId) => {
  //   const student = students.find((item) => item.id === studentId)
  //   if (student.isPresent === undefined) {
  //     student.isPresent = true;
  //     setStudents([...students])
  //   } else if (student.isPresent === true) {
  //     alert("The student is already in the Present List")
  //   } else {
  //     alert("The student is already in the Absent List")
  //   }
  //   // console.log(student.isPresent)

  // }

  // const absentHandler = (studentId) => {
  //   const student = students.find((item) => item.id === studentId);
  //   if (student.isPresent === undefined) {
  //     student.isPresent = false;
  //     setStudents([...students]);
  //   } else if (student.isPresent === false) {
  //     alert("The student is already in the Absent List")
  //   } else {
  //     alert("The student is already in the Present List")
  //   }
  //   // console.log(student.isPresent)
  // }

  const toggleHandler = (studentId) => {
    const student = students.find((item) => item.id === studentId);
    student.isPresent = !student.isPresent;
    setStudents([...students])
  }

  return (
    <div className="students__management">
      <Container className='p-0'>
        <Row>
          <Col lg={12} className='p-0'>
            <div className='header__section'>
              <div className='header'>
                <h1>Student Management System</h1>
              </div>
              <FormContainer
                students={students}
                setStudents={setStudents}
                isEditable={isEditable}
                setIsEditable={setIsEditable}
                editStudent={editStudent}
                setEditStudent={setEditStudent}
                studentsName={studentsName}
                setStudentsName={setStudentsName}
              />
              {/* <form className='student__manage__form'>
                <Form.Control type="text" value={studentsName} placeholder="Enter Student Name" className='students__name__filed'
                  onChange={(e) => setStudentsName(e.target.value)}
                />
                <button className='submit__button' onClick={(e) => isEditable ? updateHandler(e, studentsName) : addStudents(e, studentsName)}>
                  {isEditable ? 'Update Student' : 'Add Student'}
                </button>
              </form> */}
            </div>
          </Col>
        </Row>
        <div className='students__dashboard'>
          <Row>
            <Col lg={4}>
              <AllStudent
                students={students}
                setStudents={setStudents}
                setIsEditable={setIsEditable}
                setEditStudent={setEditStudent}
                setStudentsName={setStudentsName}
              />
              {/* <div className='total__students'>
                <h6 className='dashboard__header'>Total Students</h6>
                <div className='dashboard__container'>
                  <ul className='students__list'>
                    {students.map((student) => {
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
              </div> */}
            </Col>
            <Col lg={4}>
              <PresentStudent
                students={students}
                toggleHandler={toggleHandler}
              />
              {/* <div className='present__students'>
                <h6 className='dashboard__header'>Present Students</h6>
                <div className='dashboard__container'>
                  <ul className='students__list'>
                    {students.filter(item => item.isPresent === true).map(student => (
                      <Row style={{ marginBottom: "10px" }} key={student.id}>
                        <Col lg={4} className='p-0'>
                          <li className="student__list">
                            <span>{student.name}</span>
                          </li>
                        </Col>
                        <Col lg={8}>
                          <span className='buttons'>
                            <button onClick={() => toggleHandler(student.id)}>Accedently Added</button>
                          </span>
                        </Col>
                      </Row>
                    ))}
                  </ul>
                </div>
              </div> */}
            </Col>
            <Col lg={4}>
              <AbsentStudent
                students={students}
                toggleHandler={toggleHandler}
              />
              {/* <div className='absents__students'>
                <h6 className='dashboard__header'>Absent Students</h6>
                <div className='dashboard__container'>
                  <ul className='students__list'>
                    {students.filter(item => item.isPresent === false).map(student => (
                      <Row style={{ marginBottom: "10px" }} key={student.id}>
                        <Col lg={4} className='p-0'>
                          <li className="student__list">
                            <span>{student.name}</span>
                          </li>
                        </Col>
                        <Col lg={8}>
                          <span className='buttons'>
                            <button onClick={() => toggleHandler(student.id)}>Accedently Added</button>
                          </span>
                        </Col>
                      </Row>
                    ))}
                  </ul>
                </div>
              </div> */}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
