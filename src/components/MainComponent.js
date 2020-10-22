import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter, useParams } from "react-router-dom";
import { Footer } from "./FooterComponent";
import { Header } from "./HeaderComponent";
import { Home } from "./HomeComponent";
import Students from "./StudentsComponent";
import EditStudent from "./EditStudentComponent";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };
    const StudentsPage = () => {
      return <Students />;
    };

    function EditStudentPage() {
      let { studentID } = useParams();
      return <EditStudent studentIDparam={studentID} />;
    }

    return (
      <React.Fragment>
        <div className='row'>
          <Header />
        </div>

        <div className='container'>
          <div className='row'>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/students' component={StudentsPage} />
              <Route path='/students/:studentID'>
                <EditStudentPage />
              </Route>

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
