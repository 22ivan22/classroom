import React from "react";
import { Table, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllTeachers, deleteTeacher } from "./teacherSlice";

const Teacher = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);
  console.log(teachers);

  if (teachers.teacherList == null) {
    return (
      <tr>
        <td>No available teachers</td>
      </tr>
    );
  } else {
    return (
      <div className='container'>
        <div className='row mb-4'>
          <div className='col-12 col-md-12'>
            <h4>Teacher list</h4>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-12 col-md-12'>
            <Link className='btn btn-primary' to='/addTeacher'>
              Add teacher
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
            {teachers.teacherList.map((teacher) => {
              return (
                <tr key={teacher.id}>
                  <td>{teacher.name}</td>
                  <td>{teacher.rollNo}</td>
                  <td>{JSON.stringify(teacher.classList)}</td>
                  <td>{JSON.stringify(teacher.sectionList)}</td>
                  <td>
                    <span className='mr-1'>
                      <Link className='btn btn-success' to={`/editTeacher/${teacher.id}`}>
                        Edit
                      </Link>
                    </span>
                    <span>
                      {/* <Button color='danger' onClick={(event) => deleteTeacherSubmitEventHandler(event, teacher.id)}>
                    Delete
                  </Button> */}
                      <Button color='danger' onClick={() => dispatch(deleteTeacher(teacher.id))}>
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

export default Teacher;
