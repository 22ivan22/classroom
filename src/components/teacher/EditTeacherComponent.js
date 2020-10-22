import React, {  useState } from "react";
import DualListBox from "react-dual-listbox";
import { Button, Label, Col, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { editTeacher, selectTeacherById } from "./teacherSlice";
import { Control, Errors, Form } from "react-redux-form";
import { withRouter } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
// const validSection = (val) => {
//   var regexSection = /[A-F]{1}/;

//   return regexSection.test(val);
// };

const EditTeacher = (props) => {
  const dispatch = useDispatch();
  const teacher = useSelector((state) => selectTeacherById(state, props.teacherIDparam));

  console.log("teacher:" + props.teacherIDparam);
  const [name, setName] = useState(teacher.name);
  const [rollNo, setRollNo] = useState(teacher.rollNo);
  const [classList, setClassList] = useState(teacher.classList);
  const [sectionList, setSectionList] = useState(teacher.sectionList);
  const classOptions = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ];
  const sectionOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
    { value: "F", label: "F" },
  ];
  console.log("classList" + JSON.stringify(classList));
  return (
    <div>
      <Form
        model='teacher'
        onSubmit={(values) => {
          const valueswithId = {
            id: teacher.id,
            name: values.name,
            rollNo: values.rollNo,
            classList: classList,
            sectionList: sectionList,
          };

          dispatch(editTeacher(valueswithId));
          alert("Sucesful change");
          props.history.push("/teacher");
        }}>
        <Row className='form-group'>
          <Label htmlFor='name' md={2}>
            Name
          </Label>
          <Col md={10}>
            <Control.text
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='form-control'
              model='.name'
              name='name'
              id='name'
              placeholder='Teachers name'
              validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
            />
            <Errors
              className='text-danger'
              model='.name'
              show='touched'
              messages={{ required: "Required", minLength: "Must be greater than 2 characters", maxLength: "Must be 15 characters or less" }}
            />
          </Col>
        </Row>

        <Row className='form-group'>
          <Label htmlFor='rollNo' md={2}>
            Roll No.
          </Label>
          <Col md={10}>
            <Control.text
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className='form-control'
              model='.rollNo'
              name='rollNo'
              id='rollNo'
              placeholder='Roll No.'
              validators={{ isNumber }}
            />
            <Errors
              className='text-danger'
              model='.rollNo'
              show='touched'
              messages={{
                isNumber: "Must be a number",
              }}
            />
          </Col>
        </Row>
        <Row className='form-group'>
          <Label htmlFor='classList' md={2}>
            Class list
          </Label>
          <Col md={10}>
            <DualListBox
              model='.classList'
              name='classList'
              id='classList'
              options={classOptions}
              selected={classList}
              onChange={(classList) => setClassList(classList)}
            />
          </Col>
        </Row>
        <Row className='form-group'>
          <Label htmlFor='section' md={2}>
            Section
          </Label>
          <Col md={10}>
            <DualListBox
              model='.sectionList'
              name='sectionList'
              id='sectionList'
              options={sectionOptions}
              selected={sectionList}
              onChange={(sectionList) => setSectionList(sectionList)}
            />
            <Errors
              className='text-danger'
              model='.sectionList'
              show='touched'
              messages={{ required: "Required", maxLength: "Must have maximum length of 1 character", validSection: "Must be in range A-F" }}
            />
          </Col>
        </Row>

        <Row className='form-group'>
          <Col md={{ size: 10, offset: 0 }}>
            <Button type='submit' color='primary'>
              Edit teacher
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default withRouter(EditTeacher);
