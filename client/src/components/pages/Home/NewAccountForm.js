import React, { Component } from "react";
import axios from "axios";

// import { connect } from "react-redux";
// import { createUser } from '../../../actions/userActions';
// import store from "../../../store";

const style = {
  submitButton: {
    position: "relative",
    bottom: -10 + "px"
  }
};

class NewAccountForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailClass: "form-control",
      pwdClass: "form-control"
    }

    this.emailValidation = this.emailValidation.bind(this);
    this.pwdValidation = this.pwdValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailValidation (event) {
    const newEmail = event.target.value;
    let newEmailClass = "form-control";

    if (newEmail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)) {  
      newEmailClass += " is-valid";
    } else {
      newEmailClass += " is-notvalid";
    }
    this.setState({email: newEmail, emailClass: newEmailClass});
  }

  pwdValidation (event) {
    const newPwd = event.target.value;
    let newPwdClass = "form-control";

    // if (newPwd.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)) {  
    if (newPwd.length >= 8) {  
      newPwdClass += " is-valid";
    } else {
      newPwdClass += " is-notvalid";
    }
    this.setState({password: newPwd, pwdClass: newPwdClass});
  }

  handleSubmit (event) {
    // Add code to make sure both email and pwd are of valid format
    event.preventDefault();

    axios.post('/api/users', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // return (
    //   <Alert className="alert-success alert-dismissible">
    //     The alert button was clicked!
    //   </Alert>
    // );
  }

  render () {
    return (
    <form lpformnum="1">
      <fieldset>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input type="email" value={this.state.email} className={this.state.emailClass} id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.emailValidation} />
          <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" className={this.state.pwdClass} id="passwordInput" placeholder="Password" />
        </div>
        <fieldset className="form-group">
          <p className="form-text" >Reason for Use (Required)</p>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value="" checked="" />
              Create Quizzes
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value="" checked="" />
              Take Quiz(zes)
            </label>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary btn-block" style={style.submitButton} onClick={this.handleSubmit} >Submit</button>
      </fieldset>
    </form>
    )
  }
}

export default NewAccountForm;