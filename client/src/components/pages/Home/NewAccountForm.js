import React, { Component } from "react";
import { FadingCircle } from "better-react-spinkit";

import { connect } from "react-redux";
import { createUser } from '../../../actions/user.actions';

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
      creator: false,
      tester: false,
      validEmail: false,
      validPassword: false,
      validForm: false
    }

    this.emailValidation = this.emailValidation.bind(this);
    this.pwdValidation = this.pwdValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.checkBoxChange = this.checkBoxChange.bind(this);
  }

  checkBoxChange (event) {
    switch (event.target.name) {
      case ("creator"): {
        this.setState({creator: event.target.checked});
        break;
      }
      case ("tester"): {
        this.setState({tester: event.target.checked});
        break;
      }
      default:
        break;
    }
  }

  emailValidation (event) {
    const newEmail = event.target.value;
    let isValidEmail = newEmail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)
    this.setState({email: newEmail, validEmail: isValidEmail}, this.formValidation);
  }

  pwdValidation (event) {
    const newPwd = event.target.value;
    const isValidPassword = newPwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    this.setState({password: newPwd, validPassword: isValidPassword}, this.formValidation);
  }

  formValidation () {
    let isValidForm = this.state.validForm;
    isValidForm = (this.state.validEmail && this.state.validPassword && (this.state.creator || this.state.tester));
    this.setState({validForm: isValidForm});
  }

  handleSubmit (event) {
    // Add code to make sure both email and pwd are of valid format
    event.preventDefault();
    this.setState({submitting: true}, () => {
      this.props.dispatch(createUser({
          email: this.state.email,
          password: this.state.password,
          creator: this.state.creator,
          tester: this.state.tester
      }));
    });
  }

  render () {
    // console.log(`******************************** NewAccountForm props: ${JSON.stringify(this.props, null, 2)}`);
    if (this.state.submitting) {
      return (
        <div className="text-center" >
          <h1>SUBMITTING...</h1>
          <FadingCircle size={100} />
        </div>
      )
    }
    return (
    <form lpformnum="1" disabled={!this.props.user.loggedIn} >
      <fieldset>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input 
            type="email"
            value={this.state.email}
            className={this.state.validEmail ? "form-control is-valid" : "form-control is-notvalid"}
            id="emailInput"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={this.emailValidation}
          />
          <small id="emailHelp" className="form-text"> {this.state.emailMessage} </small>
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            className={this.state.validPassword ? "form-control is-valid" : "form-control is-notvalid"}
            id="passwordInput"
            aria-describedby="pwdHelp"
            placeholder="Password"
            onChange={this.pwdValidation}
          />
          <small id="pwdHelp" className="form-text"> {this.state.passwordMessage} </small>
        </div>
        <fieldset className="form-group">
          <p className="form-text" >Reason for Use (Required)</p>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="creator" onChange={this.checkBoxChange} />
              Create Quizzes
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="tester" onChange={this.checkBoxChange} />
              Take Quiz(zes)
            </label>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary btn-block" style={style.submitButton} onClick={this.handleSubmit} >Submit</button>
      </fieldset>
    </form>
    )
  }

} /* End of NewAccountForm */

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const newAccountFormConnected = connect(
  mapStateToProps
)(NewAccountForm)

export default newAccountFormConnected;