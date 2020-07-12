import React, { Component } from "react";

//import css
import './../css/reset.css'
import './../css/signup.css';
import './../css/mediaSignup.css'


//import boostrap
import { Card, Form, Button } from "react-bootstrap";

//import routes
// import { Route, BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className="card-body" id="signup-form">
        {/* <div className="container-fluid"> */}
          <div className="cards">
            <div className="title">
              <h1 className="h1">Registration</h1>
              <p className="text-muted">
                If you already have an Account with Challenge Stars
              </p>
              <NavLink to="/" id="goLogin">
                click here to login
              </NavLink>
            </div>

            <Form action="#" className="form-signup py-4">
              <h3 className="h3">Personal Information</h3>
              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">User name :</Form.Label>
                <Form.Control type="text" className="col-7 form-control-plaintext" placeholder="User name" />
              </Form.Group>
              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">Password :</Form.Label>
                <Form.Control type="password" className="col-7 form-control-plaintext" placeholder="Password" />
              </Form.Group>
              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0"><NavLink to="/generate">Generate :</NavLink></Form.Label>
                <Form.Control type="text" className="col-7 form-control-plaintext" placeholder="Generate" />
              </Form.Group>
              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">Please confirm password :</Form.Label>
                <Form.Control password="password" className="col-7 form-control-plaintext" placeholder="Please confirm password" />
              </Form.Group>
              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">E-mail address :</Form.Label>
                <Form.Control type="email" className="col-7 form-control-plaintext" placeholder="E-mail address" />
              </Form.Group>
              <h3 className="h3">Personal Information</h3>

              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">Nick name :</Form.Label>
                <Form.Control type="email" className="col-7 form-control-plaintext" placeholder="Nick name" />
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">First name :</Form.Label>
                <Form.Control type="email" className="col-7 form-control-plaintext" placeholder="First name" />
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">Last name :</Form.Label>
                <Form.Control type="email" className="col-7 form-control-plaintext" placeholder="Last name" />
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">Phone number :</Form.Label>
                <Form.Control type="email" className="col-7 form-control-plaintext" placeholder="Phone number" />
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">Promotional Code :</Form.Label>
                <Form.Control type="text" className="col-7 form-control-plaintext" placeholder="Promotional code" />
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">Referred by :</Form.Label>
                <Form.Control type="text" className="col-7 form-control-plaintext" placeholder="Referred by" />
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Label className="col-4 col-form-label px-0">Captcha :</Form.Label>
                <div className="captcha-block col-7">
                  <div className="captcha">7A223</div>
                  <Form.Control type="" className="form-control-plaintext" placeholder="" />
                </div>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Form.Check inline type="checkbox" className="col-1 form-control-plaintext" placeholder="">

                </Form.Check>
                {/* <span className="mycheckbox">
                      <svg className="check-mark">
                          <use xlinkHref="#check"></use>
                      </svg>
                      <svg className="inline-svg">
                          <symbol id="check" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                      </svg>
                    </span> */}
                <Form.Label className="label-check-box col-10 col-form-label px-0">I confirm that I have read and accepted
                                all the<NavLink to="">rules and condition</NavLink></Form.Label>
              </Form.Group>

              <Form.Group className="row ml-1">
                <Button className="register col-6" variant="none" type="submit">
                  Register
                  </Button>
              </Form.Group>

            </Form>
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default SignUp;
