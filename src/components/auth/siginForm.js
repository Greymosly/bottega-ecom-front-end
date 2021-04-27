import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "../formFields";
import { FormButton } from "../formFields";

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className}sign-in-form`}>
        <Field
          className="sign-in-form__email"
          name="email"
          type="email"
          title="Email"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          name="password"
          type="password"
          title="Password"
          placeholder="Password"
          component={FormInput}
        />
        <div className="sign-in-form__line"></div>
        <Field
          className="sign-in-form__login"
          onClick={() => console.log('tryna submit')}
          name="login"
          type="submit"
          title="Login"
          component={FormButton}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);

export default SignInForm;
