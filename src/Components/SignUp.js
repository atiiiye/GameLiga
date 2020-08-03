import React, { Component } from "react";

//import css
import './../css/reset.css'
import './../css/signup.css';
import './../css/mediaSignup.css'

//import boostrap
import { Form, Button } from "react-bootstrap";

//import routes
import { NavLink } from "react-router-dom";


const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignUp extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    firstName: '',
    lastName: '',
    nickName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    promotional: '',
    referred: '',
    checkbox: false,
    errors: {
      firstName: '',
      lastName: '',
      nickName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      promotional: '',
      referred: '',
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    const validEmailRegex = RegExp(/^([A-Za-z])(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    switch (name) {
      case 'username':
        if (value.length < 6 && value.match(/[a-zA-Z0-9]+$/)) {
          errors.username = 'Username must be 6 characters long!'
        } else if (value.match(/^[a-zA-Z0-9]+$/ && value.length > 6)) {
          errors.username = ''
        } else if (!value.match(/[a-zA-Z]+/) && value.length >= 6) {
          errors.username = 'Username can not be only number'
        } else if ((!value.match(/^[a-zA-Z0-9]+$/) && 1 < value.length < 6) || (!value.match(/^[a-zA-Z0-9]+$/) && value.length > 6)) {
          errors.username = 'please enter correct'
        } else {
          errors.username = ''
        }
        break
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'confirmPassword':
        errors.confirmPassword =
          value != this.state.password
            ? 'Password not match!'
            : '';
        break;
      case 'firstName':
        if (value.length < 6 && value.match(/^[a-zA-Z]+$/)) {
          errors.firstName = 'First Name must be 6 characters long!'
        } else if (value.match(/^[a-zA-Z]+$/ && value.length > 6)) {
          errors.firstName = ''
        } else if (!value.match(/^[a-zA-Z]+$/) && value.length >= 6) {
          errors.firstName = 'please enter only letters'
        } else if (!value.match(/^[a-zA-Z]+$/) && 1 < value.length < 6) {
          errors.firstName = 'please enter correct'
        } else {
          errors.firstName = ''
        }
        break;
      case 'lastName':
        if (value.length < 6 && value.match(/^[a-zA-Z]+$/)) {
          errors.lastName = 'Last Name must be 6 characters long!'
        } else if (value.match(/^[a-zA-Z]+$/ && value.length > 6)) {
          errors.lastName = ''
        } else if (!value.match(/^[a-zA-Z]+$/) && value.length >= 6) {
          errors.lastName = 'please enter only letters'
        } else if (!value.match(/^[a-zA-Z]+$/) && 1 < value.length < 6) {
          errors.lastName = 'please enter correct'
        } else {
          errors.lastName = ''
        }
        break;
      case 'nickName':
        if (value.length < 6 && value.match(/[a-zA-Z0-9]+$/)) {
          errors.nickName = 'Nick name must be 6 characters long!'
        } else if (value.match(/^[a-zA-Z0-9]+$/ && value.length > 6)) {
          errors.nickName = ''
        } else if (!value.match(/[a-zA-Z]+/) && value.length >= 6) {
          errors.nickName = 'Nick name can not be only number'
        } else if ((!value.match(/^[a-zA-Z0-9]+$/) && 1 < value.length < 6) || (!value.match(/^[a-zA-Z0-9]+$/) && value.length > 6)) {
          errors.nickName = 'please enter correct'
        } else {
          errors.nickName = ''
        }
        break;
      case 'phone':
        if (value.length < 11 && value.match(/[0-9]+/)) {
          errors.phone = 'Phone must be 11 characters long!'
        } else if ((value.match(/[a-zA-Z]+/) && value.length <= 11) || (value.match(/[a-zA-Z]+/) && value.length > 11)) {
          errors.phone = 'please enter only number'
        } else {
          errors.phone = ''
        }
        break;
      case 'promotional':

        if (value.length < 6 && value.match(/[a-zA-Z0-9]+/)) {
          errors.promotional = 'Code at least must be 6 characters!'
        } else if ((value.match(/[^a-zA-Z0-9]+/) && value.length >= 6) || (value.match(/[^a-zA-Z0-9]+/) && value.length < 6)) {
          errors.promotional = 'Code is invalid';
        } else {
          errors.promotional = ''
        }
        break;
      case 'referred':
        if (value.length < 6 && value.match(/^[a-zA-Z]+$/)) {
          errors.referred = 'Code must be 6 characters long!'
        } else if (value.match(/^[a-zA-Z]+$/ && value.length > 6)) {
          errors.referred = ''
        } else if (!value.match(/^[a-zA-Z]+$/) && value.length >= 6) {
          errors.referred = 'please enter only letters'
        } else if (!value.match(/^[a-zA-Z]+$/) && value.length < 6) {
          errors.referred = 'Referred is not valid'
        } else {
          errors.referred = ''
        }
        break;
      default:
        break;
    }
    
    this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors) && this.state.checkbox) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  // state = {
  //   // fields: {},
  //   // errors: {}

  //   step: 1,
  //       service_category: [],
  //       user : [
  //           {
  //             firstName: '',
  //             lastName: '',
  //             nickName: '',
  //             username: '',
  //             email: '',
  //             password: '',
  //             confirmPassword: '',
  //             errors: '',
  //             checkbox:'',
  //           }
  //       ],
  //       hasError: false,

  //   // user: [
  //   //   {firstName: ''},
  //   //   {lastName: ''},
  //   //   {nickName: ''},
  //   //   {username: ''},
  //   //   {email: ''},
  //   //   {password: ''},
  //   //   {confirmPassword: ''},
  //   //   {errors: ''},
  //   //   {checkbox:''},
  //   // ],
  //   // step: 0
  // }

  // schema = Joi.object().keys({

  //   firstName: Joi.string()
  //     .required()
  //     .min(1)
  //     .label('firstName'),
  //   lastName: Joi.string()
  //     .required()
  //     .min(1)
  //     .label('lastName'),
  //   nickName: Joi.string()
  //     .required()
  //     .min(1)
  //     .label('nickName'),
  //   username: Joi.string()
  //     .required()
  //     .min(1)
  //     .label('username'),
  //   email: Joi.string()
  //     .email({
  //       minDomainSegments: 2,
  //       tlds: { allow: ['com', 'net'] }
  //     })
  //     .required()
  //     .min(7)
  //     .label('email'),
  //   password: Joi.string()
  //     .required()
  //     .min(6)
  //     .label('Password')
  //     .error(
  //       new Error('Passwords should match and have at least 6 characters.')
  //     ),
  //   confirmPassword: Joi.string()
  //     // .eql(Joi.ref('password'))
  //     // .valid(this.state.data.confirmPassword)
  //     .required()
  //     .label('confirmPassword')
  //     .error(
  //       new Error('confirm password should match and have at least 6 characters.')
  //     ),
  // })

  // handleValidation() {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;

  //Name
  // if (!fields["username"]) {
  //   formIsValid = false;
  //   errors["username"] = "Cannot be empty";
  // }

  // if (typeof fields["username"] !== "undefined") {
  //   if (!fields["username"].match(/^[a-zA-Z]+$/)) {
  //     formIsValid = false;
  //     errors["username"] = "Only letters";
  //   }
  // }

  //Password
  // if (!fields["password"]) {
  //   formIsValid = false;
  //   errors["password"] = "Cannot be empty";
  // }

  //Email
  // if (!fields["email"]) {
  //   formIsValid = false;
  //   errors["email"] = "Cannot be empty";
  // }

  // if (typeof fields["email"] !== "undefined") {
  //   let lastAtPos = fields["email"].lastIndexOf('@');
  //   let lastDotPos = fields["email"].lastIndexOf('.');

  //   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
  //     formIsValid = false;
  //     errors["email"] = "Email is not valid";
  //   }
  // }



  //   this.setState({ errors: errors });
  //   return formIsValid;
  // }

  // contactSubmit(e) {
  //   e.preventDefault();

  //   if (this.handleValidation()) {
  //     console.log('form is valid');
  //   } else {
  //     console.log('form is invalid !');
  //   }

  // }

  // handleChange(field, e) {
  //   let fields = this.state.fields;
  //   fields[field] = e.target.value;
  //   this.setState({ fields });
  // }


  // validateProperty = (name={string}, value={ string}) => {
  //   const property = { [name]: value };
  //   const propSchema= Schema = { [name]: this.schema[name] };
  //   const { error } = Joi.validate(property, propSchema);
  //   return error ? error.details[0].message : null;
  // };

  // handleChange = (e) => {
  //   const { name, value } = e.currentTarget;

  //   const data = { ...this.state.data };
  //   data[name] = value;

  //   const errors = { ...this.state.errors };
  //   const errorMessage = this.validateProperty(name, value);
  //   if (errorMessage) errors[name] = errorMessage;
  //   else delete errors[name];

  //   this.setState({ data, errors });
  // };


  // componentDidUpdate() {
  //   this.schema.confirmPassword = Joi.any()
  //     .min(6)
  //     // .valid(this.state.data.password)
  //     .required()
  //     .label('confirmPassword')
  //     .error(
  //       new Error('Passwords should match and have at least 6 characters.')
  //     );
  // }

  // validatePropery = (name, value, schema) => {
  //   const obj = {
  //       [name]: value
  //   };
  //   const fieldSchema = {
  //       [name]: schema[name]
  //   };
  //   const result = Joi.validate(obj, fieldSchema);
  // }

  // validate = (data, schema) => {
  //   const options = {
  //       abortEarly: false
  //   };
  //   const result = Joi.validate(data, schema, options);
  // }

  // validate = () => {
  //   const result = this.schema.validate(this.state.user)
  //   console.log(result)
  // }

  // // Proceed to next step
  // nextStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step + 1
  //   });
  // }

  // // Proceed to prev step
  // prevStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step - 1
  //   });
  // }

  // // handle select
  // handleChange = (event) => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }));
  // }

  // // handle input
  // handleChangeInput = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // handleSubmit = () => {
  //   this.validate();
  // }

  handleChangeBox = (e) => {
    this.setState({
      checkbox: e.target.checked
    })
  }


  // capchaUrl = "http://api.adpod.ir/public/common/captcha";
  // date = new Date().getSeconds();
  // returnCapcha = capchaUrl + '?_t=' + date;
  // fetch(capchaUrl).then((response) => {
  //   var sessionId = response.headers.get('session_id');
  //   localStorage.setItem("session_Id", JSON.stringify(sessionId));
  //   this.setState({ capchaSrc: returnCapcha });
  // });

render() {
  const { errors } = this.state;
  return (
    <div className="card-body" id="card-form-signup">
      <div className="card-form">
        <div className="title">
          <h1 className="h1">Registration</h1>
          <p className="text-muted">
            If you already have an Account with Challenge Stars
              </p>
          <NavLink to="/" id="goLogin">
            click here to login
              </NavLink>
        </div>

        <Form
          action="#"
          className="form-signup"
          onSubmit={this.handleSubmit}
        >
          <h3 className="h3">Personal Information</h3>
          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 username">User name :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="text"
                className=" form-control-plaintext"
                placeholder="User name"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              {
                errors.username.length > 0 &&
                <span className='error'>{errors.username}</span>
              }
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 password">Password :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="password"
                className="form-control-plaintext"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
              />
              {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
            </div>
          </Form.Group>

          <Form.Group className="row ml-1" controlId="formBasicRangeCustom">
            <Form.Label className="col-sm-4 col-form-label px-0"><NavLink to="/generate">Generate :</NavLink></Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control type="range" className="form-control-plaintext" start={[0, 100]} />
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 confirmPassword">confirm password :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="password"
                className="form-control-plaintext"
                placeholder="confirm password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
              {
                errors.confirmPassword.length > 0 &&
                <span className='error'>{errors.confirmPassword}</span>
              }
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 email">E-mail address :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="email"
                className="form-control-plaintext"
                placeholder="E-mail address"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                noValidate

              />
              {
                errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>
              }
            </div>
          </Form.Group>

          <h3 className="h3">Personal Information</h3>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 nickName">Nick name :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="text"
                className="form-control-plaintext"
                placeholder="Nick name"
                name="nickName"
                onChange={this.handleChange}
                value={this.state.nickName}
                noValidate

              />
              {
                errors.nickName.length > 0 &&
                <span className='error'>{errors.nickName}</span>
              }
            </div>

          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 fistName">First name :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="text"
                className="form-control-plaintext"
                placeholder="First name"
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
              {
                errors.firstName.length > 0 &&
                <span className='error'>{errors.firstName}</span>
              }
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 lastName">Last name :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="text"
                className="form-control-plaintext"
                placeholder="Last name"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
              />
              {
                errors.lastName.length > 0 &&
                <span className='error'>{errors.lastName}</span>
              }
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 phone">Phone number :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="text"
                className="form-control-plaintext"
                placeholder="Phone number"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
              {
                errors.phone.length > 0 &&
                <span className='error'>{errors.phone}</span>
              }
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 promotional">Promotional Code :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="text"
                className="form-control-plaintext"
                placeholder="Promotional code"
                name="promotional"
                onChange={this.handleChange}
                value={this.state.promotional}
              />
              {
                errors.promotional.length > 0 &&
                <span className='error'>{errors.promotional}</span>
              }
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0 referred">Referred by :</Form.Label>
            <div className="validation-box col-sm-7">
              <Form.Control
                type="text"
                className="form-control-plaintext"
                placeholder="Referred by"
                name="referred"
                onChange={this.handleChange}
                value={this.state.referred}
              />
              {
                errors.referred.length > 0 &&
                <span className='error'>{errors.referred}</span>
              }
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Label className="col-sm-4 col-form-label px-0">Captcha :</Form.Label>
            <div className="captcha-block col-sm-7">
              <div className="captcha">7A223</div>
              <div className="validation-box ">
                <Form.Control
                  type=""
                  className="form-control-plaintext"
                  placeholder=""
                />
              </div>
            </div>
          </Form.Group>

          <Form.Group className="row ml-1">
            <Form.Check
              inline
              type="checkbox"
              className="form-control-plaintext"
              placeholder=""
              name="checkbox"
              onChange={this.handleChangeBox}
              value={this.state.checkbox}
            />

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

            <Form.Label className="label-check-box  col-form-label px-0">I confirm that I have read and accepted all the<NavLink to="/rules">rules and condition</NavLink></Form.Label>
          </Form.Group>

          <Form.Group className="row ml-1">
            {/* <div className="col-form-label"></div> */}
            {/* <NavLink to="/account" className="col"> */}
            <Button
              className={`register col-sm-7 ${this.state.checkbox ? '' : 'disabled'}`}
              variant="none"
              type="submit"
            // onClick={this.state.formValid}
            >
              Register

              </Button>
            {/* </NavLink> */}

          </Form.Group>

        </Form>
      </div>
    </div>
  );
}
}

export default SignUp;
