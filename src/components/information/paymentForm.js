import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "../formFields";
import { FormButton } from "../formFields";

import history from "../../history";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field
          className="sign-up-form__name"
          name="name"
          type="email"
          title="Name"
          placeholder="Name"
          component={FormInput}
        />
        <Field
          className="sign-up-form__email"
          name="email"
          type="email"
          title="Email"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="sign-up-form__password"
          name="password"
          type="password"
          title="Password"
          placeholder="Password"
          component={FormInput}
        />

        <Field
          className="sign-up-form__confirm"
          name="confirm"
          type="password"
          title="Confirm Password"
          placeholder=" Confirm Password"
          component={FormInput}
        />

        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__login"
          onClick={() => history.push('/account')}
          name="login"
          type="submit"
          title="Create Account"
          component={FormButton}
        />
        <Field
          className="sign-up-form__back"
          onClick={() => history.push('/signin')}
          name="back"
          type="button"
          title="Back"
          short={true}
          component={FormButton}
        />
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm",
})(PaymentForm);

export default PaymentForm;
