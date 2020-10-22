import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter, useParams } from "react-router-dom";
import { Footer } from "./layout/FooterComponent";
import { Header } from "./layout/HeaderComponent";
import { Home } from "./layout/HomeComponent";
import Student from "./student/StudentComponent";
import EditStudent from "./student/EditStudentComponent";
import AddStudent from "./student/AddStudentComponent";
import Teacher from "./teacher/TeacherComponent";
import AddTeacher from "./teacher/AddTeacherComponent";
import EditTeacher from "./teacher/EditTeacherComponent";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };
    const StudentsPage = () => {
      return <Student />;
    };
    const AddStudentPage = () => {
      return <AddStudent />;
    };
    const TeacherPage = () => {
      return <Teacher />;
    };
    const AddTeacherPage = () => {
      return <AddTeacher />;
    };
    const EditTeacherPage = () => {
      let { teacherID } = useParams();
      return <EditTeacher teacherIDparam={teacherID} />;
    };
    const EditStudentPage = () => {
      let { studentID } = useParams();
      return <EditStudent studentIDparam={studentID} />;
    };

    return (
      <React.Fragment>
        <div className='row'>
          <Header />
        </div>

        <div className='container'>
          <div className='row'>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/teacher' component={TeacherPage} />
              <Route path='/addTeacher' component={AddTeacherPage} />
              <Route path='/editTeacher/:teacherID' component={EditTeacherPage} />
              <Route exact path='/student' component={StudentsPage} />
              <Route path='/addStudent' component={AddStudentPage} />
              <Route path='/editStudent/:studentID' component={EditStudentPage} />

              {/*<Route exact path='/contactus' component={ContactPage} />
              <Route exact path='/aboutus' component={AboutPage} /> */}
              <Redirect to='/home' />
            </Switch>
          </div>
        </div>
        <div className='row'>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
