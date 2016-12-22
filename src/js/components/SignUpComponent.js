import React from "react";

const fieldValidations = [
  ruleRunner("name", "Name", required),
  ruleRunner("emailAddress", "Email Address", required),
  ruleRunner("password1", "Password", required, minLength(6)),
  ruleRunner("password2", "Password Confirmation", mustMatch("password1", "Password"))
];

export default class SignUpComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showErrors: false,
      validationErrors: {}
    };
    // Run validations on initial state
    this.state.validationErrors = run(this.state, fieldValidations);
  }

  handleFieldChanged(field) {
    return (e) => {
      // update() is provided by React Immutability Helpers
      // https://facebook.github.io/react/docs/update.html
      let newState = update(this.state, {
        [field]: {$set: e.target.value}
      });
      newState.validationErrors = run(newState, fieldValidations);
      this.setState(newState);
    };
  }

  handleSubmitClicked() {
    this.setState({showErrors: true});
    if($.isEmptyObject(this.state.validationErrors) == false) return null;
    // ... continue submitting data to server
  }

  render() {
    return (
      <div>
        <TextView placeholder="Email address" showError={this.state.showErrors}
                  text={this.props.emailAddress} onFieldChanged={this.handleFieldChanged("emailAddress")}
                  errorText={this.errorFor("emailAddress")} />

        // Render Name, Password, Submit button, etc. fields
      </div>
    );
  }
}
