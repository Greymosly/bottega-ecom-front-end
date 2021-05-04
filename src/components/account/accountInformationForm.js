import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, LongGrayButton } from "../formFields";
import { FormButton } from "../formFields";

class AccountInformationForm extends Component {
  constructor() {
    super();

    this.state = {
      showPassword: false,
    };
  }

  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit}
        className={`${className} account-information-form`}
      >
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

        {this.state.showPassword ? (
          [
            <Field
              key={0}
              className="account-information-form__current"
              name="current"
              type="current"
              title="Current Password"
              placeholder="Current Password"
              component={FormInput}
            />,
            <Field
              key={1}
              className="account-information-form__new"
              name="new"
              type="password"
              title="New Password"
              placeholder="New Password"
              component={FormInput}
            />,
            <Field
              key={2}
              className="account-information-form__confirm"
              name="confirm"
              type="password"
              title="Confirm Password"
              placeholder="Confirm Password"
              component={FormInput}
            />,
          ]
        ) : (
          <Field
            className="account-information-form__change-password"
            onClick={() => this.setState({ showPassword: true })}
            name="change-password"
            labelTitle="Password"
            type="button"
            title="Current Password"
            component={LongGrayButton}
          />
        )}
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;
