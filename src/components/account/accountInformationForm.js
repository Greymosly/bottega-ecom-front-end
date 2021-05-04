import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, LongGrayButton } from "../formFields";
import { FormButton } from "../formFields";


class AccountInformationForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
        <Field
          className="account-information-form__name"
          name="name"
          type="name"
          title="Name"
          placeholder="Name"
          component={FormInput}
        />
        <Field
          className="account-information-form__email"
          name="email"
          type="email"
          title="Email"
          placeholder="Email"
          component={FormInput}
        />

        <Field
          className="account-information-form__street-address"
          name="address"
          type="address"
          title="Street Address"
          placeholder="Street Address"
          component={FormInput}
        />
        <Field
          className="account-information-form__city"
          name="city"
          type="city"
          title="City"
          placeholder="City"
          component={FormInput}
        />

        <Field
          className="account-information-form__state"
          name="state"
          type="state"
          title="State"
          placeholder="State"
          component={FormInput}
        />
        <Field
          className="account-information-form__zipcode"
          name="zipcode"
          type="zipcode"
          title="Zipcode"
          placeholder="Zipcode"
          component={FormInput}
        />

        <Field
          className="account-information-form__change-password"
          onClick={() => console.log('tryna show password')}
          name="change-password"
          labelTitle='Password'
          type="button"
          title="Change Password"
          component={LongGrayButton}
        />
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;
