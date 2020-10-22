import React from "react";
import { Button, Label, Col, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice";
import { Control, Errors, Form } from "react-redux-form";
import { withRouter } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validSection = (val) => {
  var regexSection = /[A-F]{1}/;

  return regexSection.test(val);
};
const AddStudent = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Form
        model='student'
        onSubmit={(values) => {
          dispatch(addStudent(values));
          props.history.push("/student");
        }}>
        <Row className='form-group'>
          <Label htmlFor='name' md={2}>
            Name
          </Label>
          <Col md={10}>
            <Control.text
              className='form-control'
              model='.name'
              name='name'
              id='name'
              placeholder='Students name'
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
            <Control.text className='form-control' model='.rollNo' name='rollNo' id='rollNo' placeholder='Roll No.' validators={{ isNumber }} />
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
          <Label htmlFor='classNo' md={2}>
            Class no
          </Label>
          <Col md={10}>
            <Control.select model='.classNo' defaultValue='1' name='classNo' id='classNo' className='form-control'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Control.select>
          </Col>
        </Row>
        <Row className='form-group'>
          <Label htmlFor='section' md={2}>
            Section
          </Label>
          <Col md={10}>
            <Control.text
              className='form-control'
              model='.section'
              name='section'
              id='section'
              placeholder='Section'
              validators={{ required, validSection, maxLength: maxLength(1) }}
            />
            <Errors
              className='text-danger'
              model='.section'
              show='touched'
              messages={{ required: "Required", maxLength: "Must have maximum length of 1 character", validSection: "Must be in range A-F" }}
            />
          </Col>
        </Row>

        <Row className='form-group'>
          <Col md={{ size: 10, offset: 0 }}>
            <Button type='submit' color='primary'>
              Add student
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default withRouter(AddStudent);
