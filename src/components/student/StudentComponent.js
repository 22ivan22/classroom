import React from "react";
import { Table, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllStudents, deleteStudent } from "./studentSlice";

const Student = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectAllStudents);
  console.log(students);

  if (students.studentList == null) {
    return (
      <tr>
        <td>No available students</td>
      </tr>
    );
  } else {
    return (
      <div className='container'>
        <div className='row mb-4'>
          <div className='col-12 col-md-12'>
            <h4>Student list</h4>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-12 col-md-12'>
            <Link className='btn btn-primary' to='/addStudent'>
              Add student
            </Link>
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Class no</th>
              <th>Section</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.studentList.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.classNo}</td>
                  <td>{student.section}</td>
                  <td>
                    <span className='mr-1'>
                      <Link className='btn btn-success' to={`/editStudent/${student.id}`}>
                        Edit
                      </Link>
                    </span>
                    <span>
                      {/* <Button color='danger' onClick={(event) => deleteStudentSubmitEventHandler(event, student.id)}>
                    Delete
                  </Button> */}
                      <Button color='danger' onClick={() => dispatch(deleteStudent(student.id))}>
                        Delete
                      </Button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default Student;
